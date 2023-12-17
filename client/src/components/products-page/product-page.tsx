import React from "react";
import { useProductVariants } from "../../context/product-variant-context";
import { ProductPageContainer } from "./product.styles";
import { Announcement } from "../announcement/announcement";
import { FilterProduct } from "./Filter-product";

export function ProductPage() {
  const { productVariants, isFetchProductLoading, isError ,hasMorePages } =
    useProductVariants();

  if (isFetchProductLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div> something went wrong...</div>;
  }

  return (
    <section>
      <ProductPageContainer>
        <Announcement />
        <FilterProduct products={productVariants}  hasMorePages={hasMorePages}/>
      </ProductPageContainer>
    </section>
  );
}
