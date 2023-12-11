import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
import { data } from "./data";

const Nav = styled.nav(() => ({
  width: "100%",
  height: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#00552f",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "9",
  boxShadow: "0 1rem 1.5rem hsla(270, 68%, 42%, 20%)",
  transition: "all 500ms ease",
  gap: "1rem",
}));

const Container = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  boxSizing: "border-box",
  padding: "0 1rem",
  maxWidth: "1200px",
  margin: "0 auto",
}));

const Hamburger = styled.div(() => ({
  display: "none",
  cursor: "pointer",
  "@media (max-width: 768px)": {
    display: "block",
  },
}));

const MobileMenu = styled.div(() => ({
  display: "none",
  "@media (max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    position: "absolute",
    top: "100%",
    left: "0",
    right: "0",
    width: "100%",
    background: "#00552f",
    padding: "1rem",
    zIndex: "10",
  },
  "& li": {
    listStyle: "none",
  },
  "& a": {
    color: "#f6f6f3",
  },
}));

const List = styled.ul(() => ({
  listStyle: "none",
  display: "none",
  flexDirection: "column",
   padding: "1rem",
  "@media (min-width: 768px)": {
    display: "flex",
    flexDirection: "row",
    gap: "5rem",
    padding: "0",
    justifyContent: "flex-end",
  },

  "@media (min-width: 1024px)": {
    display: "flex",
    flexDirection: "row",
    gap: "none",
    padding: "0",
    justifyContent: "flex-end",
  },

  
}));

const ListItem = styled.li(() => ({
  textDecoration: "none",
  color: "#f6f6f3",
  fontSize: "1.5rem",
}));

const ListItemLink = styled(Link)({
  textDecoration: "none",
  color: "#f6f6f3",
  padding: "0.5rem 1rem",
  fontFamily: "Gill Sans",
  "&:hover": {
    color: "#ccc",
  },
});

const Heading = styled.h1(() => ({
  textAlign: "center",
  color: "#f6f6f3",
  fontSize: "24px",
  fontFamily: "cursive",
}));

const BasketIcon = styled(BsBasketFill)<{ isOpen: boolean }>(({ isOpen }) => ({
  color: "#f6f6f3",
  "@media (max-width: 768px)": {
    display: isOpen ? "block" : "none", // Only show in the mobile menu when it's open
  },
  display: "block",
}));

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
};
