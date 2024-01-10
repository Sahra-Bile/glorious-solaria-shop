import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Add, Remove } from '@material-ui/icons'

import type { CartItemType } from '../../context/cart-context'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
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

type Props = {
  item: CartItemType
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

export function CartItem(props: Props) {
  const { item, addToCart, removeFromCart } = props

  return (
    <Wrapper>
      <div>
        <h3>{item.product.productName}</h3>
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
      <img src={item.product.image_3} alt={item.product.productName} />
    </Wrapper>
  )
}
