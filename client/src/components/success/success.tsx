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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid teal;
  padding: 100px;
  background-color: #8daaa3;
  border-radius: 20px;
  box-shadow: 0 0 20px 0 rgba(238, 230, 230, 0.845);

`

export function Success() {
  const navigate = useNavigate()
  const { cartItems, clearCart, calculateTotal } = useCartItems()

  return (
    <Container backgroundimage={Image}>
      <Wrapper>
        <Heading>Thank you for your order</Heading>
        <Paragraph>
          Your order has been received and is currently being processed. <br /> A confirmation email will be
          sent to you shortly.
        </Paragraph>
        <h2>Order Summary:</h2>
        {cartItems.map((item) => (
          <div key={item.product.variantId}>
            <div>
              <h2>{item.product.productName}</h2>
              <div className="information">
                <Paragraph>Quantity: {item.amount} </Paragraph>
                <Paragraph>Total: ${(item.amount * item.product.price).toFixed(2)}</Paragraph>
              </div>
            </div>
          </div>
        ))}
        <h2>Overall Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        <div>
          <Paragraph>
            Thank you once again for choosing us. <br /> We hope you will be pleased with your purchase!
          </Paragraph>
        </div>
        <Button
          onClick={() => {
            clearCart()
            navigate('/shop')
          }}
        >
          Continue Shopping
        </Button>
      </Wrapper>
    </Container>
  )
}
