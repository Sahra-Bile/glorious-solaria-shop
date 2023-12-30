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
    <Container >
      <FormWrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Label>Username</Label>
          <StyledInput type='email' placeholder="sara.bile@gmail.com" />
          <Label>Password</Label>
          <StyledInput type='password' placeholder="************" />
          <Button>LOGIN</Button>
          <StyledLink to={"http://localhost:9000/auth/google"} style={{ color: "red" }}>Log in with your Google account</StyledLink>
          <StyledLink to={"/forget-password"}>Forgot password?</StyledLink>
          <StyledLink to={"/register"}>Create new account</StyledLink>
        </Form>
      </FormWrapper>
    </Container>
  );
}
