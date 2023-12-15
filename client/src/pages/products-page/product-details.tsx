import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Arrow,
  Carousel,
  Dot,
  DotsContainer,
} from "./product.styles";
import { useFetchProduct } from "../../queries/product-queries";
import {  styled } from "styled-components";
import { Newsletter } from "../news-letter/news-letter";
import { Announcement } from "../announcement/announcement";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../../utils/responsive";

const Container = styled.div`
  margin-top: 100px;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

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
