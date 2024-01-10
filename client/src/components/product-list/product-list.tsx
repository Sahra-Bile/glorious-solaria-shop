import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import type { ProductVariantsParams } from '../../api/api-service.types'
import { useCartItems } from '../../context/cart-context'

const ProductListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  /* gap: 2px; */
  /* background-color: #edf4f4; */
  color: black;

  h3 {
    margin: 10px;
    font-size: 1.5rem;
  }
  p {
    margin: 3px;
    font-size: 1rem;
  }
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 15px;
  background-color: #065454;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0a8d8d;
  }
`

type ProductListProps = {
  products: ProductVariantsParams[]
}

export function ProductList({ products }: ProductListProps) {
  const { addToCart } = useCartItems()

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.variantId} xs={12} sm={6} md={4}>
          <Link to={`/shop/${product.variantId}`}>
            <Image src={product.image_3} alt={product.productName} />
          </Link>
          <ProductListWrapper>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <Button onClick={() => addToCart({ product, amount: 1 })}>Add to cart</Button>
          </ProductListWrapper>
        </Grid>
      ))}
    </Grid>
  )
}
