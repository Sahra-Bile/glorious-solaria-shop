import { styled } from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import Button from '@material-ui/core/Button'

import { UpdateUserInfo } from '../login/update-user-info'
import { useCartItems } from '../../context/cart-context'
import HeroImage from "../../asserts/checkout-2.png"
import { MediaQueries } from '../../utils/style-constants';

import { CheckoutForm } from './checkout-form'

type ContainerProps = {
  backgroundimage?: string;
}

export const CheckoutWrapper = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: ${({ backgroundimage }) => backgroundimage ? `url(${backgroundimage}) center/cover no-repeat` : 'none'};
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 4rem 3rem;
  gap: 0.5rem;
 
  @media ${MediaQueries.mdUp} {
   flex-direction: row;
   gap: 2.5rem;
  }

  div{
    flex: 2;
    
  }
  section{
    flex: 3;
  }
  
`;

const OrderSummaryWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid teal;
  background-color:  #8daaa3;
`
const Wrapper = styled.div`
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
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
  }

  img {
    max-width: 80px;
    object-fit: cover;
  }
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`


function ProductList() {
  const { cartItems, removeFromCart, addToCart } = useCartItems()
  return (
    <Wrapper>
      {cartItems.map((item) => (
        <div key={item.product.variantId} style={{ borderBottom: '1px solid #1d6453' }}>
          <div>
            <h3>{item.product.productName}</h3>
            <img src={item.product.image_2} alt={item.product.productName} />
            <div className="information">
              <p>Price: ${item.product.price}</p>
              <p>Total: ${(item.amount * item.product.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
              <Button
                size="medium"
                disableElevation
                variant="contained"
                onClick={() => removeFromCart(item.product.variantId)}
              >
                <Remove />
              </Button>
              <Amount>{item.amount}</Amount>
              <Button size="medium" disableElevation variant="contained" onClick={() => addToCart(item)}>
                <Add />
              </Button>
            </div>
          </div>
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

  return (
    <CheckoutWrapper backgroundimage={HeroImage}>
      <section>
        <ProductList />
        <OrderSummary total={total} />
      </section>
      <UpdateUserInfo />s
    </CheckoutWrapper>
  )
}
