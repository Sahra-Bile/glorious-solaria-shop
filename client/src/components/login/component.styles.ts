import styled from "styled-components";
import HeroImage from "../../asserts/eco-woman.png";
import { MediaQueries } from "../../utils/style-constants";
import { Link } from "react-router-dom";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
background: url(${HeroImage}) center/cover no-repeat;
linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
background-size: cover;
background-position: center;
text-align: center;
padding: 4rem 1rem;
@media ${MediaQueries.smUp} {
    margin-top: 0;
}
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  @media ${MediaQueries.smUp} {
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
  padding-bottom: 20px;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
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
  highlight: teal;
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
  @media ${MediaQueries.smUp} {
    width: 25%;
  }
`;
export const StyledInput = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid gray;
  &:focus {
    border: 1px solid teal;
    outline: none;

  }
`;