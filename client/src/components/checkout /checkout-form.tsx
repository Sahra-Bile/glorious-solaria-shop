import { useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { styled } from 'styled-components'

import { useCartItems } from '../../context/cart-context'

const Button = styled.button`
  border: none;
  outline: 0;
  padding: 15px;
  color: white;
  background-color: black;
  text-align: center;
  cursor: pointer;
  width: 75%;
  font-size: 12px;
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

export function CheckoutForm() {
  const { cartItems } = useCartItems()
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string)

    if (!stripe || !elements) {
      // Stripe.js är inte laddat, förhindra formulärskickning
      return
    }

    const headers = {
      'Content-Type': 'application/json',
    }
    const response = await fetch('http://localhost:9000/api/create-checkout-session', {
      method: 'POST',
      headers,
      body: JSON.stringify(cartItems),
    })

    const session = await response.json()

    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    })

    if (result?.error) {
      // eslint-disable-next-line no-console
      console.log(result.error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <Button type="submit" disabled={!stripe}>
        Order
      </Button>
    </form>
  )
}
