
import { useNavigate } from 'react-router'
import { styled } from 'styled-components'

import { useCartItems } from '../../context/cart-context'
import { Container } from '../login/login-register.styles'
import Image from '../../asserts/checkout-2.png'


export const Button = styled.button`
  border: none;
  outline: 0;
  padding: 20px;
  color: white;
  background-color: #1d6453;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
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
const Heading = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
  text-align: center;
  color: black;

`
const Paragraph = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  color: black;
`
const Wrapper = styled.div` 
  border-bottom: 1px solid teal;
  padding: 100px;
  background-color: #8daaa3;
  border-radius: 20px;
  box-shadow: 0 0 20px 0 rgba(238, 230, 230, 0.845);
`

export function Success() {
  const navigate = useNavigate()
  const { cartItems, clearCart } = useCartItems()

  return (
    <Container backgroundimage={Image}>
      <Wrapper >
        <Heading>Thank you for your order</Heading>
        <Paragraph>
          We are currently processing your order and will <br />
          send you a confirmation email shortly!
        </Paragraph>
        <h2>Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.product.variantId} >
            <div>
              <h3>{item.product.productName}</h3>
              <div className="information">
                <span>Amount:{item.amount}</span>
                <Paragraph>Total: ${(item.amount * item.product.price).toFixed(2)}</Paragraph>
              </div>
            </div>
          </div>
        ))}
        <Button onClick={() => {
          clearCart();
          navigate('/shop');
        }}>Continue Shopping</Button>
      </Wrapper>

    </Container >
  )
}
