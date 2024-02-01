import { styled } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Add, Remove } from '@material-ui/icons'
import Button from '@material-ui/core/Button'

import { UpdateUserInfo } from '../login/update-user-info'
import { useCartItems } from '../../context/cart-context'
import HeroImage from '../../asserts/checkout-2.png'
import { MediaQueries } from '../../utils/style-constants'

import { CheckoutForm } from './checkout-form'

type ContainerProps = {
  backgroundimage?: string
}

export const CheckoutWrapper = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-direction: column;
  background: ${({ backgroundimage }) =>
    backgroundimage ? `url(${backgroundimage}) center/cover no-repeat` : 'none'};
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 4rem 5rem;
  @media ${MediaQueries.mdUp} {
    flex-direction: row;
  }
`
const OrderSummaryWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid teal;
  background-color: #8daaa3;
`
const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 15px;
  background-color: #e0e0d6;
  color: black;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
  }

  img {
    max-width: 80px;
    object-fit: cover;
  }
`
const ProductCardWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

function ProductList() {
  const { cartItems, removeFromCart, addToCart } = useCartItems()
  return (
    <Wrapper>
      {cartItems.map((item) => (
        <div key={item.product.variantId} style={{ borderBottom: '1px solid #1d6453' }}>
          <h3>{item.product.productName}</h3>

          <ProductCardWrapper>
            <div>
              <img src={item.product.image_2} alt={item.product.productName} />
            </div>

            <div>
              <p>Price: ${item.product.price}</p>
            </div>
            <div>
              <p>Total: ${(item.amount * item.product.price).toFixed(2)}</p>
            </div>

            <div>
              <Button
                size="medium"
                disableElevation
                variant="contained"
                onClick={() => removeFromCart(item.product.variantId)}
              >
                <Remove />
              </Button>
              <span>{item.amount}</span>
              <Button size="medium" disableElevation variant="contained" onClick={() => addToCart(item)}>
                <Add />
              </Button>
            </div>
          </ProductCardWrapper>
        </div>
      ))}
    </Wrapper>
  )
}

type OrderSummaryProps = {
  total: any
}

function OrderSummary({ total }: OrderSummaryProps) {
  return (
    <OrderSummaryWrapper>
      <h3>Order Summary</h3>
      <p>Total: ${total}</p>
      <CheckoutForm />
    </OrderSummaryWrapper>
  )
}

export function Checkout() {
  const { cartItems, calculateTotal } = useCartItems()
  const total = calculateTotal(cartItems)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token')
    if (token) {
      localStorage.setItem('authToken', token)
      // Redirect to last visited page
      const lastPage = localStorage.getItem('lastVisitedPage') || '/defaultPage'
      navigate(lastPage, { replace: true })
    }
  }, [location])

  return (
    <CheckoutWrapper backgroundimage={HeroImage}>
      <UpdateUserInfo />
      <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
        <ProductList />
        <OrderSummary total={total} />
      </div>
    </CheckoutWrapper>
  )
}
