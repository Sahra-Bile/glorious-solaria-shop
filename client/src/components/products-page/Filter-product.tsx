import React, { useEffect, useState } from "react";
import { GroupedProduct } from "./group-product-variants";
import { Wrapper } from "./product.styles";
import { FilterContainer, Newsletter, ProductList, SearchBar } from "..";
type FilterProductProps = {
  products: GroupedProduct[];
};

export function FilterProduct({ products }: FilterProductProps) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const colors = Array.from(
    new Set(products.flatMap((product) => product.colors))
  );
  const sizes = Array.from(
    new Set(products.flatMap((product) => product.sizes))
  );

  const categories = Array.from(
    new Set(products.flatMap((product) => product.categoryName))
  );

  const filteredProducts = products.filter(
    (product) =>
      (selectedColor ? product.colors.includes(selectedColor) : true) &&
      (selectedSize ? product.sizes.includes(selectedSize) : true) &&
      (selectedCategory ? product.categoryName === selectedCategory : true) &&
      (searchTerm
        ? product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
  );

  useEffect(() => {
    products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  return (
    <main>
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
      <Newsletter />
    </main>
  );
}
