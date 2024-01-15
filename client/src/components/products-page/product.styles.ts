import { styled } from 'styled-components'

import { MediaQueries } from '../../utils/style-constants'

export const ProductPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media ${MediaQueries.mdUp} {
    flex-direction: row;
  }
`
export const AddToBagButton = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #1d6453;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 3rem;
  gap: 5rem;
  @media ${MediaQueries.mdUp} {
    flex-direction: row;
  }
`
