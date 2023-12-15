import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "../../queries/product-queries";
import { Newsletter } from "../news-letter/news-letter";
import { Announcement } from "../announcement/announcement";
import { Add, Remove } from "@material-ui/icons";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
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
} from "./product-details.styles";

export function ProductDetails() {
  const { id } = useParams();
  const productId = parseInt(id || "0", 10);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: product, isLoading, isError } = useFetchProduct(productId);
  console.log(product);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const images = [
    product?.image_1,
    product?.image_2,
    product?.image_3,
    product?.image_4,
  ].filter(Boolean);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !product) {
    return <div>Error or no product found.</div>;
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
                  display: index === currentImageIndex ? "block" : "none",
                }}
              />
            ))}
          </Carousel>
          <DotsContainer>
            {images.map((_, index) => (
              <Dot
                key={index}
                style={{
                  backgroundColor:
                    currentImageIndex === index ? "black" : "#bbb",
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
              <FilterColor color={product.colorName} />
              <FilterColor color={product.colorName} />
              <FilterColor color={product.colorName} />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>{product.size}</FilterSizeOption>
                <FilterSizeOption>{product.size}</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
    </Container>
  );
}
