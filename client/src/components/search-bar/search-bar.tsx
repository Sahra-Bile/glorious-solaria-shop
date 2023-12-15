import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { MediaQueries } from "../../utils/style-constants";

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
  flex-direction: row;
  padding: 20px;
  width: calc(100% - 40px);
`;

export const SearchContainer = styled.div`
  border: 5px solid lightgray;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: #fff3f2;
`;

export const SearchInput = styled.input`
  border: none;
  background: #fff3f2;
  padding: 10px;
  width: 100%;
  font-size: 14px;
  &:focus {
    width: 100%;
  }
  @media ${MediaQueries.lgUp} {
    max-width: 400px;
  }
`;
type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <RightWrapper>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <BiSearch size={30} />
      </SearchContainer>
    </RightWrapper>
  );
};
