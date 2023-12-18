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
import { Link } from "react-router-dom";
import { data } from "./data";
import  Badge  from "@material-ui/core/Badge";
import {  CloseSharp, HorizontalSplit, ShoppingCartOutlined } from "@material-ui/icons";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  return (
    <Nav >
      <Container >
        <ListItemLink as={Link} to="/">
          <Heading>Glorious Solaria</Heading>
        </ListItemLink>
        <Hamburger onClick={toggleMenu}>
          {isOpen ? (
            <CloseSharp  style={{ color: "#f6f6f3" }} />
          ) : (
            <HorizontalSplit  style={{ color: "#f6f6f3" }} />
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
            <Badge  badgeContent={4} color="primary">
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
              >
                  <ShoppingCartOutlined fontSize="large"/>
              </Link>
              </Badge>
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
            <Badge badgeContent={4} color="default" >
            <Link to="/cart">
              <BasketIcon fontSize="medium"/>
            </Link>
            </Badge>
          </ListItem>
          </List>
      </Container>
    </Nav>
  );
}
