import { useEffect } from 'react'
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
  font-size: 60px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
`

const Paragraph = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
`

export function Success() {
  const navigate = useNavigate()
  const { cartItems, clearCart, calculateTotal } = useCartItems()
  const total = calculateTotal(cartItems)


  useEffect(() => {
    if (cartItems.length !== 0) {
      clearCart()
    }
  }, [clearCart, cartItems])

  return (
    <Container backgroundimage={Image}>
      <div>
        <Heading>Thank you for your order</Heading>
        <Paragraph>
          We are currently processing your order and will <br />
          send you a confirmation email shortly!
        </Paragraph>
        <Paragraph>
          Total: <span>${total}</span>
        </Paragraph>
        <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
      </div>

    </Container>
  )
}
