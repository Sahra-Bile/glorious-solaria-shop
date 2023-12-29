import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Label,
  Wrapper,
} from "./login-register.styles";



export function Register() {
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Label>First name</Label>
          <Input placeholder="Sara" />
          <Label>Last name</Label>
          <Input placeholder="Bile" />
          <Label>Username</Label>
          <Input placeholder="sahra.bile13" />
          <Label>Email</Label>
          <Input placeholder="sahra.bile134@gmail.com" />
          <Label>Password</Label>
          <Input placeholder="********" />
          <Label>Confirm password</Label>
          <Input placeholder="*********" />
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
      </Wrapper>
    </Container>
  );
}
