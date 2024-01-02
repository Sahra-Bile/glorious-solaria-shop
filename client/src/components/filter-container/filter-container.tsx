import type { ChangeEvent } from "react";
import { styled } from "styled-components";

import { MediaQueries } from "../../utils/style-constants";
import { FilterDropdown } from "../filter-dropdown/filter-dropdown";

export const LeftWrapper = styled.div`
  width: 100%;
  min-width: 0;
  padding: 20px;
  height: auto;
  overflow-y: visible;
  @media ${MediaQueries.mdUp} {
    width: 300px;
    min-width: 350px;
    overflow-y: auto;
    height: calc(100% - 1rem);
  }
`;
const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 20px;
  color: black;
  text-align: center;
`;

type FilterContainerProps = {
  colors: string[];
  sizes: string[];
  categories: string[];
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export function FilterContainer(props: FilterContainerProps) {

  const { colors,
    sizes,
    categories,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    selectedCategory,
    setSelectedCategory, } = props;
  const handleColorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <LeftWrapper>
      <Title>Filter products</Title>
      <FilterWrapper>
        <FilterDropdown
          title="Colors"
          options={colors}
          selectedValue={selectedColor}
          handleSelectChange={handleColorChange}
        />
        <FilterDropdown
          title="Sizes"
          options={sizes}
          selectedValue={selectedSize}
          handleSelectChange={handleSizeChange}
        />
        <FilterDropdown
          title="Categories"
          options={categories}
          selectedValue={selectedCategory}
          handleSelectChange={handleCategoryChange}
        />
      </FilterWrapper>
    </LeftWrapper>
  );
}
