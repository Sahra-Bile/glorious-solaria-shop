import React, { useState } from "react";
import {
  BasketIcon,
  Container,
  Hamburger,
  Heading,
  List,
  ListItem,
  ListItemLink,
  MobileMenu,
  Nav,
} from "./navbar.styles";
import { BsBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { data } from "./data";
import { FaBars, FaTimes } from "react-icons/fa";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  return (
    <Nav>
      <Container>
        <ListItemLink as={Link} to="/">
          <Heading>Glorious Solaria</Heading>
        </ListItemLink>
        <Hamburger onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes size={24} style={{ color: "#f6f6f3" }} />
          ) : (
            <FaBars size={24} style={{ color: "#f6f6f3" }} />
          )}
        </Hamburger>
        {isOpen && (
          <MobileMenu>
            {data.map((item) => (
              <ListItem key={item.id}>
                <ListItemLink
                  as={Link}
                  to={item.Link}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </ListItemLink>
              </ListItem>
            ))}
            <ListItem>
              <ListItemLink
                as={Link}
                to="/cart"
                onClick={() => setIsOpen(false)}
              >
                <BsBasketFill size={24} style={{ color: "#f6f6f3" }} />
              </ListItemLink>
            </ListItem>
          </MobileMenu>
        )}
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
}
