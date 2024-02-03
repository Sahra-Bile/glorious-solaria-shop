import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { AddIcCallSharp, Email, Home } from "@material-ui/icons";

import {
  Button,
  ContactPageContainer,
  ContactWrapper,
  Form,
  Header,
  Heading,
  IconPlaceholder,
  Input,
  Label,
  List,
  ListContainer,
  ListWrapper,
  MessageContainer,
  Paragraph,
  TextArea,
} from "./contact.styles";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<FormData>();

  const sendEmail: SubmitHandler<FormData> = () => {
    if (form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID as string,
          process.env.REACT_APP_TEMPLATE_ID as string,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY as string

        )
        .then(
          (result) => {

            // eslint-disable-next-line no-console
            console.log("Email successfully sent");
            reset();
          },
          (error) => {
            // eslint-disable-next-line no-console
            console.log("Error sending email", error);
          }
        );
    }
  };

  return (
    <section>
      <ContactPageContainer>
        <ContactWrapper>
          <Heading>Contact</Heading>
          <Paragraph>
            If you have any questions, feedback, or just want to say hello, we&apos;d
            love to hear from you! Fill out the form with your details,
          </Paragraph>
          <Paragraph> and we&apos;ll get back to you as soon as possible.
            Your insights and inquiries are invaluable to us.</Paragraph>
        </ContactWrapper>
        <ListWrapper>
          <ListContainer>
            <IconPlaceholder>
              <AddIcCallSharp />
            </IconPlaceholder>
            <List>Phone</List>
            <List>+ 467 456 7890</List>
          </ListContainer>
          <ListContainer>
            <IconPlaceholder>
              <Email />
            </IconPlaceholder>
            <List>Email</List>
            <List>info@glorious-solaria.com</List>
          </ListContainer>
          <ListContainer>
            <IconPlaceholder>
              <Home />
            </IconPlaceholder>
            <List>Address</List>
            <List>Solarievägen 12 </List>
            <List>1234 Stockholm</List>
          </ListContainer>
        </ListWrapper>
        <MessageContainer>
          <Header>Contact Us</Header>
          <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <Label>Name</Label>
            <Input
              placeholder="Sara"
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
            />
            <Label>Email</Label>
            <Input
              placeholder="Sara13@gmail.com"
              type="email"
              {...register("email", {
                required: "email is required",
              })}
            />
            <Label>Message</Label>
            <TextArea
              placeholder="I would like to..."
              {...register("message", {
                required: "Message is required",
              })}
            />
            <Button type="submit" disabled={!isValid}>
              Send message
            </Button>
          </Form>
        </MessageContainer>
      </ContactPageContainer>
    </section>
  );
}
