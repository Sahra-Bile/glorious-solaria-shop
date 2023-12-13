import React from "react";
import { useProductVariants } from "../context/product-variant-context";
import { ProductVariantCard } from "./product-variant-card";
import { groupProductVariants } from "./group-product-variants";
import { MainContent } from "./product.styles";

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
