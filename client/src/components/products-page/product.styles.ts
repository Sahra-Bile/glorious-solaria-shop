import { styled } from "styled-components";

import { MediaQueries } from "../../utils/style-constants";

export const ProductPageContainer = styled.div`
  display: flex;
  max-width: 2000px;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  @media ${MediaQueries.mdUp} {
    flex-direction: row;
  }
`;
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
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  @media ${MediaQueries.mdUp} {
    flex-direction: row;
  }
`;
