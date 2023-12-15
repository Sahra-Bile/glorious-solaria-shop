import React, { ChangeEvent, useState } from "react";
import { GroupedProduct } from "./group-product-variants";
import { Link } from "react-router-dom";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import {
  Circle,
  Filter,
  FilterContainer,
  IconWrapper,
  Image,
  InfoContainer,
  LeftWrapper,
  ProductWrapper,
  RightWrapper,
  Select,
  SelectOption,
  Title,
  Wrapper,
} from "./product.styles";

type FilterProductProps = {
  products: GroupedProduct[];
};

export function FilterProduct({ products }: FilterProductProps) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
      (selectedCategory ? product.categoryName === selectedCategory : true)
  );

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
  };
  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <Wrapper>
      <LeftWrapper>
        <FilterContainer>
          <Title>Filter products</Title>
          <Filter>
            <Select onChange={handleColorChange} value={selectedColor}>
              <SelectOption value="">All colors</SelectOption>
              {colors.map((color, index) => (
                <SelectOption key={index} value={color}>
                  {color}
                </SelectOption>
              ))}
            </Select>
          </Filter>
          <Filter>
            <Select onChange={handleSizeChange} value={selectedSize}>
              <SelectOption value="">All size</SelectOption>
              {sizes.map((size, index) => (
                <SelectOption key={index} value={size}>
                  {size}
                </SelectOption>
              ))}
            </Select>
          </Filter>
          <Filter>
            <Select onChange={handleCategoryChange} value={selectedCategory}>
              <SelectOption value="">All categories</SelectOption>
              {categories.map((category, index) => (
                <SelectOption key={index} value={category}>
                  {category}
                </SelectOption>
              ))}
            </Select>
          </Filter>
        </FilterContainer>
      </LeftWrapper>
      <RightWrapper>
        {filteredProducts.map((product) => (
          <ProductWrapper>
            <Circle />
            <Image src={product.image_3} alt={product.productName} />
            <InfoContainer>
              <IconWrapper>
                <BsFillBasket3Fill />
              </IconWrapper>
              <IconWrapper>
                <Link to={`/shop/${product.variantId}`}>
                  <IoSearchSharp size={20} />
                </Link>
              </IconWrapper>
              <IconWrapper>
                <FaHeart />
              </IconWrapper>
            </InfoContainer>
          </ProductWrapper>
        ))}
      </RightWrapper>
    </Wrapper>
  );
}
