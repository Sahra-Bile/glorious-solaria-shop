import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import HeroImage from "../../asserts/eco-woman.png";
import { MediaQueries } from "../../utils/style-constants";

const Container = styled.section`
display: flex;
justify-content: center;
align-items: center;
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
const FormWrapper = styled.div`
  width: 76%;
  padding: 20px;
  background-color: white;
  @media ${MediaQueries.smUp} {
    width: 25%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

export function Login() {
  return (
    <Container>
      <FormWrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <StyledLink to={"/forget-password"}>
            DO NOT YOU REMEMBER THE PASSWORD?
          </StyledLink>
          <StyledLink to={"/register"}>CREATE A NEW ACCOUNT</StyledLink>
        </Form>
      </FormWrapper>
    </Container>
  );
}
