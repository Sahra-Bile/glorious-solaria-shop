import { useEffect, useRef, useState } from "react";

import { styled } from "styled-components";
import { GroupedProduct } from "./group-product-variants";

const ProductCard = styled.div(() => ({
  width: "200px",
  border: "1px solid #ccc",
  padding: "10px",
  position: "relative",
}));
const ProductInfo = styled.div(() => ({
  textAlign: "center",
  marginTop: "10px",
}));

const ProductImage = styled.div(() => ({
  position: "relative",
}));

const Image = styled.img(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const WishlistButton = styled.button(() => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  cursor: "pointer",
}));

const Price = styled.div(() => ({
  margin: "10px 0",
}));

const OriginalPrice = styled.span(() => ({
  fontWeight: "bold",
}));

const ColorOptions = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  margin: "10px 0",
}));

const ColorOption = styled.span(() => ({
  display: "inline-block",
  width: "20px",
  height: "20px",
  border: "1px solid #ccc",
  cursor: "pointer",
}));

const AddButton = styled.button(() => ({
  background: "none",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
}));

const AddToBagButton = styled.button(() => ({
  background: "black",
  color: "white",
  border: "none",
  padding: "10px",
  width: "100%",
  cursor: "pointer",
}));

export type ProductVariantCardProps = {
  variant: GroupedProduct;
};

export function ProductVariantCard({ variant }: ProductVariantCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (imageIntervalRef.current) clearInterval(imageIntervalRef.current);
    };
  }, []);

  const handleMouseOver = () => {
    if (imageIntervalRef.current) clearInterval(imageIntervalRef.current);

    imageIntervalRef.current = window.setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % variant.image.length
      );
    }, 1000);
  };

  const handleMouseOut = () => {
    if (imageIntervalRef.current) clearInterval(imageIntervalRef.current);
    setCurrentImageIndex(0);
  };

  return (
    <ProductCard onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <p>{variant.productName}</p>
      <ProductImage>
        <Image src={variant.image} alt={variant.productName} />
      </ProductImage>
      <ProductInfo>
        <ColorOptions>
          {variant.colors.map((color) => (
            <ColorOption
              key={color}
              style={{ backgroundColor: color }}
            ></ColorOption>
          ))}
        </ColorOptions>
        {variant.sizes.map((size) => (
          <ColorOption key={size}> {size}</ColorOption>
        ))}
        <Price>
          <OriginalPrice>{" SEK " + variant.price}</OriginalPrice>
        </Price>
        <AddToBagButton>ADD TO BAG</AddToBagButton>
      </ProductInfo>
    </ProductCard>
  );
}
