import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { useCartItems } from '../../context/cart-context'
import { MediaQueries } from '../../utils/style-constants'
import { useAuth } from '../../queries/user-queries'

import { CartItem } from './cart-items'

const Wrapper = styled.aside`
  width: 350px;
  padding: 10px;
  @media ${MediaQueries.mdUp} {
    width: 500px;
    padding: 20px;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
const Button = styled.button`
  background-color: #1d6453;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: teal;
  }
  &:active {
    background-color: #534747;
  }
  @media ${MediaQueries.mdUp} {
    padding: 20px;
    width: 100%;
  }
  animation: fadeIn 0.5s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

export function Cart() {
  const { addToCart, removeFromCart, cartItems, calculateTotal, setCartOpen } = useCartItems()
  const isAuthenticated = useAuth();

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.product.variantId}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>YOUR TOTAL BILL: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <ButtonWrapper>
        {cartItems.length > 0 && (
          <Link to={isAuthenticated ? '/checkout' : '/login'}>
            <Button onClick={() => setCartOpen(false)}>Checkout</Button>
          </Link>
        )}
      </ButtonWrapper>
    </Wrapper>
  )
}
