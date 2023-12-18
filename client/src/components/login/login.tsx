import React from "react";
import {
  Button,
  Container,
  Form,
  FormWrapper,
  StyledInput,
  StyledLink,
  Title,

} from "./component.styles";

export function Login() {
  return (
    <Container>
      <FormWrapper>
        <Title>SIGN IN</Title>
        <Form style={{ flexDirection: "column" }}>
          <StyledInput placeholder="username" />
          <StyledInput placeholder="password" />
          <Button>LOGIN</Button>
          <StyledLink to={"/forget-password"}>Forgot password?</StyledLink>
          <StyledLink to={"/register"}>Create new account</StyledLink>
        </Form>
      </FormWrapper>
    </Container>
  );
}
