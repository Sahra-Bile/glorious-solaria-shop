import React from "react";
import {
  Button,
  Container,
  Form,
  FormWrapper,
  StyledInput,
  StyledLink,
  Title,
  Label,

} from "./login-register.styles";

export function Login() {
  return (
    <Container>
      <FormWrapper>
        <Title>SIGN IN</Title>
        <Form style={{ flexDirection: "column" }}>
          <Label>Username</Label>
          <StyledInput placeholder="sara.bile@gmail.com" />
          <Label>Password</Label>
          <StyledInput placeholder="************" />
          <Button>LOGIN</Button>
          <StyledLink to={"/forget-password"}>Forgot password?</StyledLink>
          <StyledLink to={"/register"}>Create new account</StyledLink>
        </Form>
      </FormWrapper>
    </Container>
  );
}
