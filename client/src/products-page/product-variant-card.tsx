import { GroupedProduct } from "./group-product-variants";
import { useState } from "react";
import {
  AddToBagButton,
  Arrow,
  Carousel,
  CarouselItem,
  Dot,
  DotsContainer,
  OriginalPrice,
  Price,
  ProductCard,
  ProductCards,
  ProductInfo,
  ProductTitle,
} from "./product.styles";

export type ProductVariantCardProps = {
  variant: GroupedProduct;
};

export function ProductVariantCard({ variant }: ProductVariantCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    variant.image_1,
    variant.image_2,
    variant.image_3,
    variant.image_4,
  ].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <ProductCards className="container">
    <ProductCard>
      <Arrow direction="prev" onClick={prevImage}>
        &lt;
      </Arrow>
      <Arrow direction="next" onClick={nextImage}>
        &gt;
      </Arrow>

      <Carousel>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ display: index === currentImageIndex ? "block" : "none" }}
          />
        ))}
      </Carousel>

      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            style={{
              backgroundColor: currentImageIndex === index ? "black" : "#bbb",
            }}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </DotsContainer>
      <ProductInfo>
        <ProductTitle>{variant.productName}</ProductTitle>
        <Price>
          <OriginalPrice>{" SEK " + variant.price}</OriginalPrice>
        </Price>
        <AddToBagButton>ADD TO BAG</AddToBagButton>
      </ProductInfo>
    </ProductCard>
    </ProductCards>
  );
}
