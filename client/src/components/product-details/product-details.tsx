import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Add, Remove } from '@material-ui/icons'
import Button from '@material-ui/core/Button'

import { useFetchProduct } from '../../queries/product-queries'
import { Newsletter } from '../news-letter/news-letter'
import { Announcement } from '../announcement/announcement'
import { useCartItems } from '../../context/cart-context'
import type { ProductVariantsParams, SingleProductVariantsParam } from '../../api/api-service.types'

import {
  AddContainer,
  Amount,
  AmountContainer,
  StyledButton,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
  Arrow,
  Carousel,
  Dot,
  DotsContainer,
} from './product-details.styles'

export function ProductDetails() {
  const { id } = useParams()
  const productId = parseInt(id || '0', 10)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const { data: product, isLoading, isError } = useFetchProduct(productId)
  const { addToCart } = useCartItems()

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const images = [product?.image_1, product?.image_2, product?.image_3, product?.image_4].filter(Boolean)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !product) {
    return <div>Error or no product found.</div>
  }

  const handleAddToCart = (singleProductVariant: SingleProductVariantsParam) => {
    const productVariantParam: ProductVariantsParams = {
      productId: product.productId,
      variantId: singleProductVariant.variantId,
      productName: product.productName,
      price: singleProductVariant.price,
      image_1: singleProductVariant.image_1,
      image_2: singleProductVariant.image_2,
      image_3: singleProductVariant.image_3,
      image_4: singleProductVariant.image_4,
      stockQuantity: singleProductVariant.stockQuantity,
      colors: singleProductVariant.colors.join(', '),
      sizes: singleProductVariant.sizes.join(', '),
      categoryName: '',
      description: '',
    }

    addToCart({ product: productVariantParam, amount: quantity })
  }

  const incrementQuantity = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }


  return (
    <Container>
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Arrow direction="prev" onClick={prevImage}>
            &lt;
          </Arrow>
          <Arrow direction="next" onClick={nextImage}>
            &gt;
          </Arrow>
          <Carousel>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  display: index === currentImageIndex ? 'block' : 'none',
                }}
              />
            ))}
          </Carousel>
          <DotsContainer>
            {images.map((_, index) => (
              <Dot
                key={index}
                style={{
                  backgroundColor: currentImageIndex === index ? 'black' : '#bbb',
                }}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </DotsContainer>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.productName}</Title>
          <Desc>{product.description}</Desc>
          <Price>SEK {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.colors.map((colorObj: any, index: number) => (
                <FilterColor key={index} color={colorObj.colorName} />
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.sizes.map((sizeObj: any, index: number) => (
                  <FilterSizeOption key={index}>{sizeObj.size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Button size="medium" disableElevation variant="contained" onClick={decrementQuantity}>
                <Remove />
              </Button>
              <Amount>{quantity}</Amount>
              <Button size="medium" disableElevation variant="contained" onClick={incrementQuantity}>
                <Add />
              </Button>
            </AmountContainer>
            <StyledButton onClick={() => handleAddToCart(product)}>Add to cart</StyledButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
    </Container>
  )
}
