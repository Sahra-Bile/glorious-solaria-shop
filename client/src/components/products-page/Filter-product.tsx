import React, { useEffect, useState } from "react";
import { Wrapper } from "./product.styles";
import { FilterContainer, Newsletter, ProductList, SearchBar } from "..";
import { Pagination } from "../pagination/pagination";
import { styled } from "styled-components";
import { ProductVariantsParams } from "../../api/api-service.types";

const ProductFilterWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
type FilterProductProps = {
  products: ProductVariantsParams[];
};

export function FilterProduct({ products }: FilterProductProps) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const validProducts = products.filter(
    (product) => product.colors && product.sizes
  );

  const colors = Array.from(
    new Set(validProducts.flatMap((product) => product.colors.split(",")))
  );

  const sizes = Array.from(
    new Set(validProducts.flatMap((product) => product.sizes.split(",")))
  );

  const categories = Array.from(
    new Set(products.flatMap((product) => product.categoryName))
  );

  const handleFilters = () => {
    const filtered = products.filter(
      (product) =>
        (selectedColor
          ? product.colors.split(",").includes(selectedColor)
          : true) &&
        (selectedSize
          ? product.sizes.split(",").includes(selectedSize)
          : true) &&
        (selectedCategory ? product.categoryName === selectedCategory : true) &&
        (searchTerm
          ? product.colors.toLowerCase().includes(searchTerm.toLowerCase())
          : true)
    );
    setFilteredProducts(filtered);
  };

  console.log(colors);
  useEffect(() => {
    handleFilters();
  }, [searchTerm, selectedColor, selectedSize, selectedCategory, products]);

  return (
    <ProductFilterWrapper>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
      <Pagination />
      <Newsletter />
    </ProductFilterWrapper>
  );
}
