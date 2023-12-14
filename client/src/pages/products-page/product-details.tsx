import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Arrow,
  Carousel,
  CarouselItem,
  Dot,
  DotsContainer,
} from "./product.styles";
import { useFetchProduct } from "../../queries/product-queries";

export function ProductDetails() {
    const { id } = useParams();
    const productId = parseInt(id || "0", 10);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: product, isLoading, isError } = useFetchProduct(productId)
  console.log(product)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const images = [product?.image_1, product?.image_2, product?.image_3, product?.image_4].filter(Boolean);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !product) {
    return <div>Error or no product found.</div>;
  }

  return (
    <div>
      <div>
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
                backgroundColor: currentImageIndex === index ? "black" : "#bbb",
              }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </DotsContainer>
        <div>
          <h1>{product.productName}</h1>
          <p>{product.description}</p>
          <div>
            <div>
            <span>Color</span>
            {product.colorName}
            </div>
            <div>
            <span>sizes</span>
            {product.size}
            </div>
            <div>
            <span>stockQuantity</span>
            {product.stockQuantity}
            </div>
            
            <span>{" SEK " + product.price}</span>
          </div>
          <button>ADD TO BAG</button>
        </div>
      </div>
    </div>
  );
}
