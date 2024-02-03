import type { ChangeEvent } from 'react'
import React from 'react'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import Input from '@material-ui/core/Input/Input'

import SearchImage from '../../asserts/search-product.png'
import { MediaQueries } from '../../utils/style-constants'
import { CustomButton } from '../../utils/custom-button'

const SearchBarContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${SearchImage}) center/cover no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
`
const SearchForm = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  @media ${MediaQueries.mdUp} {
    flex-direction: row;
  }
`
const SearchInput = styled(Input)`
  background: #e1dad9;
  padding: 10px;
  width: 100%;
  max-width: 250px;
  &:focus {
    width: 100%;
  }
  @media ${MediaQueries.lgUp} {
    max-width: 300px;
  }
`

type SearchBarProps = {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  onSearch: (searchTerm: string) => void
  onClear: () => void
  isSearchPerformed: boolean
}

export function SearchBar(props: SearchBarProps) {
  const { searchTerm, setSearchTerm, onSearch, onClear, isSearchPerformed } = props

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isEmpty(searchTerm)) {
      onSearch(searchTerm)
    }
  }

  return (
    <SearchBarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {!isSearchPerformed &&
          <CustomButton
            onClick={() => onSearch(searchTerm)}
            label="Search"
          />
        }
        {isSearchPerformed && <CustomButton
          onClick={() => onClear()}
          label="Clear"
        />}
      </SearchForm>
    </SearchBarContainer>
  );
}
