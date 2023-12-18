import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { MediaQueries } from "../../utils/style-constants";
import isEmpty from "lodash/isEmpty";

const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
  padding: 20px;
  width: calc(100% - 0px);
  @media ${MediaQueries.lgUp} {
    justify-content: flex-end;
  align-items: flex-end;
  }
`;
const SearchContainer = styled.div`
  border: 2px solid #1d6453;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff3f2;

  @media ${MediaQueries.lgUp} {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const SearchInput = styled.input`
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
const Button = styled.button`
  border: none;
  text-align: center;
  background-color: teal;
  color: white;
  cursor: pointer;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
  }
`;
type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  onSearch: (searchTerm: string) => void;
  onClear: () => void;
  isSearchPerformed: boolean;
};

export const SearchBar = ({
  searchTerm,
  setSearchTerm,
  onSearch,
  onClear,
  isSearchPerformed,
}: SearchBarProps) => {


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmpty(searchTerm)) {
      onSearch(searchTerm);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <RightWrapper>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </SearchContainer>
        {!isSearchPerformed && (
          <Button type="submit">Search</Button>
        )}
        {isSearchPerformed && (
          <Button onClick={onClear}>Clear</Button>
        )}
      </RightWrapper>
    </SearchForm>
  );
};
