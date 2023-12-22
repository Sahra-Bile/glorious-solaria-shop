import styled from "styled-components";
import { Link } from "react-router-dom";

import HeroImage from "../../asserts/eco-woman.png";
import { MediaQueries } from "../../utils/style-constants";


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
background: url(${HeroImage}) center/cover no-repeat;
background-size: cover;
background-position: center;
text-align: center;
padding: 4rem 1rem;
gap: 1rem;
@media ${MediaQueries.mdUp} {
    margin-top: 0;
}
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f6f6f3;
  @media ${MediaQueries.mdUp} {
    width: 50%;
  }
  @media ${MediaQueries.lgUp} {
    width: 40%;
  }
  `;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 8000px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 0.5rem;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid gray;
  &:focus {
    border: 1px solid teal;
    outline: none;
  }
`;
export const Agreement = styled.span`
  font-size: 12px;
  font-weight: 100px;
  margin: 20px 0px;
  padding-bottom: 10px;
  text-align: center;
  line-height: 1.5rem;
  letter-spacing: 0.05em;
  font-feature-settings: "ss05";
  line-break: loose;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
export const StyledLink = styled(Link)`
  margin: 5px 0px;
  font-size: 10px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;
export const FormWrapper = styled.div`
  width: 76%;
  padding: 30px;
  background-color: white;
  @media ${MediaQueries.mdUp }  {
    width: 40%;
  }
  @media ${MediaQueries.lgUp }  {
    width: 25%;
  }
`;
export const StyledInput = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid gray;
  &:focus {
    border: 1px solid teal;
    outline: none;

  }
`;
export const Label = styled.label`
  margin-top: 2px;
  text-align: center;
  
`;
