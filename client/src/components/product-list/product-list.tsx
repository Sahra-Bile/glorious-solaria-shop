import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import type { ProductVariantsParams } from '../../api/api-service.types'
import { useCartItems } from '../../context/cart-context'
import { MediaQueries } from '../../utils/style-constants'
import { mobile } from '../../utils/responsive'


const ProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background: whitesmoke;
  color: black;
  padding: 30px;

  h3 {
    margin: 10px;
    font-size: 1.5rem;
  }
  p {
    margin: 3px;
    font-size: 1rem;
  }
`
const ImgContainer = styled.div`
  width: 100%;
  max-width: 600px;
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  ${mobile({ height: '100%' })}
`
export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px 15px;
  background-color: #065454;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0a8d8d;
  }
  @media ${MediaQueries.mdUp} {
    width: 40%;
    padding: 5px 10px;
  }

  @media ${MediaQueries.lgUp} {
    width: 30%;
    padding: 5px 10px;
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
          <ImgContainer>
            <Link to={`/shop/${product.variantId}`}>
              <Image src={product.image_1} alt={product.productName} />
            </Link>
          </ImgContainer>
          <ProductListWrapper>
            <h4>{product.productName}</h4>
            <h3>${product.price}</h3>
            <Button onClick={() => addToCart({ product, amount: 1 })}>Add to cart</Button>
          </ProductListWrapper>
        </Grid>
      ))}
    </Grid>
  )
}
