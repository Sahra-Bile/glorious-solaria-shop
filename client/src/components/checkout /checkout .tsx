import { styled } from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'

import { useCartItems } from '../../context/cart-context'
import { MediaQueries } from '../../utils/style-constants'

export const LeftWrapper = styled.div`
  width: 100%;
  max-width: 2000px;
  margin: 100px auto;
  margin-top: 50px;
  padding-bottom: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const ProductWrapper = styled.div`
  width: 75%;
  padding: 15px;
  border-radius: 5px;
  background-color: #ebf3ec;

  @media ${MediaQueries.mdUp} {
    width: 90%;
    max-width: 800px;
  }
`
const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: 15px;
  color: black;
`
const Image = styled.img`
  width: 300px;
`
const InformationWrapper = styled.div`
  flex: 1;
`

export function Checkout() {
  const { cartItems } = useCartItems()


  const makePayment = async (event: any) => {
    event.preventDefault()
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string);

    const headers = {
      "Content-Type": "application/json"
    }
    const response = await fetch("http://localhost:9000/api/create-checkout-session", {
      method: "POST",
      headers,
      body: JSON.stringify(cartItems)
    });

    const session = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: session.id
    });

    if (result?.error) {
      // eslint-disable-next-line no-console
      console.log(result.error.message)
    }


  }
  return (
    <section>
      <LeftWrapper>
        <Header>In your cart</Header>
        {cartItems.map((item) => (
          <ProductWrapper key={item.product.variantId}>
            <Image src={item.product.image_2} alt={item.product.productName} />
            <InformationWrapper>
              <h3>{item.product.productName}</h3>
              <p>Total: ${(item.amount * item.product.price).toFixed(2)}</p>
            </InformationWrapper>
          </ProductWrapper>
        ))}
        <form onSubmit={makePayment}>
          <button type="submit">Checkout</button>
        </form>
      </LeftWrapper>
    </section>
  )
}
