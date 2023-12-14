import React from "react";
import { useProductVariants } from "../../context/product-variant-context";
import { groupProductVariants } from "./group-product-variants";
import { ProductPageContainer } from "./product.styles";
import { ProductItem } from "./product-item";

export function ProductPage() {
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
      <ProductPageContainer className="container">
        {Object.values(groupedProducts).map((variant) => (
          <ProductItem key={variant.variantId} variant={variant} />
        ))}
      </ProductPageContainer>
    </>
  );
}
