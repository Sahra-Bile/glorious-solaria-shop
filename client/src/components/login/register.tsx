import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import {
  Agreement,
  Button,
  Container,
  Form,
  Title,
  StyledInput,
  FormWrapper,
} from "./login-register.styles";



export function Register() {
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  return (
    <Container>
      <FormWrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <StyledInput type='text' placeholder="First name" />
          <StyledInput type='text' placeholder="Last name" />
          <StyledInput type='email' placeholder="Email" />
          <StyledInput type='password' placeholder="Password" />
          <StyledInput type='password' placeholder="Confirm password" />
          <Agreement>
            By registering for an account, I agree to the collection and use of
            my personal information as outlined in the PRIVACY POLICY
            <Checkbox
              color="default"
              onChange={() => setIsAcknowledged(!isAcknowledged)}
            />
          </Agreement>
          <Button type="submit" disabled={!isAcknowledged}>
            CREATE
          </Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}
