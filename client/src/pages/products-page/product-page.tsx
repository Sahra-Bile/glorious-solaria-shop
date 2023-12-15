import React from "react";
import { useProductVariants } from "../../context/product-variant-context";
import { groupProductVariants } from "./group-product-variants";
import { ProductPageContainer } from "./product.styles";
import { FilterProduct } from "./Filter-product";
import {Announcement} from "../announcement/announcement";

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
    <section>
    <ProductPageContainer >
        <Announcement />
      <FilterProduct products={groupedProducts} />
    </ProductPageContainer>
    </section>
  );
}
