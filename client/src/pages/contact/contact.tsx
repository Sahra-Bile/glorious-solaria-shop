import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
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

const templateId = "template_2id74wq";
const serviceId = "service_gl5fwls";
const publicKey = "5BUctxtwb5HjEpcrA";

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
          process.env.REACT_APP_SERVICE_ID || serviceId,
          process.env.REACT_APP_TEMPLATE_ID || templateId,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY || publicKey
        )
        .then(
          (result) => {
            console.log("Email successfully sent");
            reset();
          },
          (error) => {
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
            If you have any questions, feedback, or just want to say hello, we'd
            love to hear from you! Fill out the form with your details,
          </Paragraph>
          <Paragraph>
            {" "}
            and we'll get back to you as soon as possible. Your insights and
            inquiries are invaluable to us.
          </Paragraph>
        </ContactWrapper>
        <ListWrapper>
          <ListContainer>
            <IconPlaceholder>
              <AddIcCallSharp fontSize="large" />
            </IconPlaceholder>

            <List>+ 467 456 7890</List>
          </ListContainer>
          <ListContainer>
            <IconPlaceholder>
              <Email fontSize="large" />
            </IconPlaceholder>

            <List>info@glorious-solaria.com</List>
          </ListContainer>
          <ListContainer>
            <IconPlaceholder>
              <Home fontSize="large" />
            </IconPlaceholder>

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
            ></TextArea>
            <Button type="submit" disabled={!isValid}>
              Send message
            </Button>
          </Form>
        </MessageContainer>
      </ContactPageContainer>
    </section>
  );
}
