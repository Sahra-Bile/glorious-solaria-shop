import React from "react";
import { useProductVariants } from "../context/product-variant-context";
import { ProductVariantCard } from "./product-variant-card";
import { groupProductVariants } from "./group-product-variants";
import { styled } from "styled-components";



export const MainContent = styled.main`
  display: grid;
  gap: 32px 24px; 
  padding: 16px; 
  padding-top: 5rem; 
  justify-content: center;
  align-items: flex-start; ;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); 
    padding-top: 3rem; 
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 4rem; 
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr); 
    padding-top: 4rem; 
  }
`;

export function ProductsPage() {
  const { productVariants, isFetchProductLoading, isError } =
    useProductVariants();

  if (isFetchProductLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div> something went wrong...</div>;
  }

  const groupedProducts = groupProductVariants(productVariants);

  return (
    <>
      <MainContent>
        {Object.values(groupedProducts).map((variant) => (
          <ProductVariantCard key={variant.productId} variant={variant} />
        ))}
      </MainContent>
    </>
  );
}
