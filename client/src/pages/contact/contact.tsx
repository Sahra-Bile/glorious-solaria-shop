import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useForm, SubmitHandler } from "react-hook-form";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
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

const templateId =  "template_2id74wq"
const serviceId =  "service_gl5fwls"
 const publicKey =  "5BUctxtwb5HjEpcrA"

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>();

  const sendEmail: SubmitHandler<FormData> = () => {
    if (form.current) {
      emailjs
        .sendForm(
            process.env.REACT_APP_SERVICE_ID  ||  serviceId,
            process.env.REACT_APP_TEMPLATE_ID  || templateId,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY  || publicKey
        )
        .then(
          (result) => {
            console.log("Email successfully sent");
            reset(); // Reset the form fields after successful submission
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
            love to hear from you!<br></br>
            Fill out the form with your details, and we'll get back to you as
            soon as possible.<br></br>
            Your insights and inquiries are invaluable to us.
          </Paragraph>
        </ContactWrapper>
        <ListWrapper>
          <ListContainer>
            <IconPlaceholder>
              <FaPhone />
            </IconPlaceholder>
            <List>Phone</List>
            <List>+ 467 456 7890</List>
          </ListContainer>
          <ListContainer>
            <IconPlaceholder>
              <FaMailBulk />
            </IconPlaceholder>
            <List>Email</List>
            <List>info@glorious-solaria.com</List>
          </ListContainer>
          <ListContainer>
            <IconPlaceholder>
              <FaHome />
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
              rows={4}
              cols={50}
              placeholder="Message"
              {...register("message", {
                required: "Message is required",
              })}
            ></TextArea>
            <Button type="submit" disabled={!isValid}>
              Send
            </Button>
          </Form>
        </MessageContainer>
      </ContactPageContainer>
    </section>
  );
}
