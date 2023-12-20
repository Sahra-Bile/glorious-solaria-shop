import React, { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

import type { ProductVariantsParams } from "../../api/api-service.types";
import { FilterContainer, ProductList } from "..";
import { Pagination } from "../pagination/pagination";

import { Wrapper } from "./product.styles";

const ProductFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  `;

type FilterProductProps = {
  products: ProductVariantsParams[];
  hasMorePages: boolean;
};

export function FilterProduct(props: FilterProductProps) {
  const { products, hasMorePages } = props;
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const validProducts = filteredProducts.filter(
    (product) => product.colors && product.sizes
  );

  const colors = Array.from(
    new Set(
      validProducts.flatMap((filteredProducts) =>
        filteredProducts.colors.split(",")
      )
    )
  );

  const sizes = Array.from(
    new Set(validProducts.flatMap((product) => product.sizes.split(",")))
  );

  const categories = Array.from(
    new Set(filteredProducts.flatMap((product) => product.categoryName))
  );

  const handleFilters = useCallback(() => {
    const filtered = products.filter(
      (product) =>
        (selectedColor
          ? product.colors.split(",").includes(selectedColor)
          : true) &&
        (selectedSize
          ? product.sizes.split(",").includes(selectedSize)
          : true) &&
        (selectedCategory ? product.categoryName === selectedCategory : true)
    );
    setFilteredProducts(filtered);
  }, [products, selectedColor, selectedSize, selectedCategory]);

  useEffect(() => {
    handleFilters();
  }, [handleFilters]);


  return (
    <ProductFilterWrapper>
      <Wrapper>
        <FilterContainer
          colors={colors}
          sizes={sizes}
          categories={categories}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ProductList products={filteredProducts} />
      </Wrapper>
      {hasMorePages && <Pagination />}
    </ProductFilterWrapper>
  );
}
