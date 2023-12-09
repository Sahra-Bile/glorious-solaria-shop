import React from "react";
import { useProductVariants } from "../context/product-variant-context";

export const ProductsPage: React.FC = () => {
  const productContext = useProductVariants();

  if (!productContext || !productContext.productVariants) {
    return <div>Loading...</div>;
  }

  const { productVariants } = productContext;
  console.log(productVariants);

  return (
    <div>
      {productVariants.map((variant) => (
        <div key={variant.variantId}>
          <h1>Products</h1>
          <h3>{variant.productName}</h3>
          <p>Category: {variant.categoryName}</p>
          <p>Description: {variant.description}</p>
          <p>Size: {variant.sizeName}</p>
          <p>Color: {variant.colorName}</p>
          <p>Price: {variant.price}</p>
          <p>Quantity: {variant.stockQuantity}</p>
        </div>
      ))}
    </div>
  );
};
