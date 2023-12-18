import React, { useState } from "react";
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from "./component.styles";
import Checkbox from "@material-ui/core/Checkbox";

export function Register() {
  const [isAcknowledged, setIsAcknowledged] = useState(false);
  console.log(isAcknowledged);
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
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
