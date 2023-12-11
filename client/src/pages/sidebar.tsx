import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter-context";
import { useProductVariants } from "../context/product-variant-context";

const SidebarContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "100%",
  padding: "20px",
}));

const CategoryButton = styled.button(() => ({
  cursor: "pointer",
  margin: "5px",
  padding: "10px",
  border: "1px solid #ccc",
  backgroundColor: "#f7f7f7",

  "&:hover": {
    backgroundColor: "#e7e7e7",
  },
}));

export function Sidebar() {
  const { filters, setFilters } = useFilterContext();
  const { productVariants } = useProductVariants();

  //Collect all categories from productVariants
  const categories = Array.from(
    new Set(productVariants.map((pv) => pv.categoryName))
  );

  //Handle category click
  const handleCategoryClick = (category: string) => {
    setFilters({ ...filters, category });
  };
  console.log(categories);

  return (
    <SidebarContainer>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </CategoryButton>
      ))}
    </SidebarContainer>
  );
}
