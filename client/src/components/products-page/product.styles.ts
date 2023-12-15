import { styled } from "styled-components";
import { MediaQueries } from "../../utils/style-constants";

export const ProductPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;
export const ProductWrapper = styled.div`
display: flex;
display: 1;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #f6f6f3;
margin: 5px;
min-width: 280px;
height: 500px;
position: relative;
&:hover{
    ${InfoContainer}{
        opacity: 1;
    }
}
@media ${MediaQueries.mdUp} {
    flex-direction: row;
    min-width: 380px;
}
}
`;
export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${MediaQueries.mdUp} {
    flex-direction: row;
  }
`;
export const LeftWrapper = styled.div`
  width: 100%;
  min-width: 0;
  padding: 20px;
  background-color: rgba(22, 16, 26, 0.2);
  height: auto;
  overflow-y: visible;
  @media ${MediaQueries.mdUp} {
    width: 250px;
    min-width: 250px;
    overflow-y: auto;
    height: calc(100% - 1rem);
  }
`;
export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
  padding: 20px;
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 20px;
  color: white;
`;
export const Filter = styled.div`
  background-color: lightgray;
  padding: 10px;
  display: flex;
`;
export const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
  background-color: lightgray;
`;
export const SelectOption = styled.option`
  background-color: gray;
  font-size: 6rem;
  color: white;
`;
