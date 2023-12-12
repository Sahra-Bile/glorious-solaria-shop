import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  ListItem,
  ListItemLink,
  Nav,
  List,
} from "./navbar.styles";
import { data } from "./data";
import { BasketIcon } from "./navbar.styles";

export const Navbar = () => {
  return (
    <Nav>
      <Container>
        <ListItemLink as={Link} to="/">
          <Heading>Glorious Solaria</Heading>
        </ListItemLink>
        <List>
          {data.map((item) => (
            <ListItem key={item.id}>
              <ListItemLink as={Link} to={item.Link}>
                {item.title}
              </ListItemLink>
            </ListItem>
          ))}
          <ListItem>
            <Link to="/cart">
              <BasketIcon size={24} />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Nav>
  );
};
