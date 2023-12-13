import { BsBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MediaQueries = {
  smUp: "(min-width: 480px)",
  mdUp: "(max-width: 768px)",
  lgUp: "(min-width: 1024px)",
  xlUp: "(min-width: 1280px)",
  x2Up: "(min-width: 1536px)",
};

export const Nav = styled.nav(() => ({
  width: "100%",
  height: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#1D6453",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "1000",
  gap: "1rem",
}));

export const Container = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  boxSizing: "border-box",
  padding: "0 1rem",
  maxWidth: "1200px",
  margin: "0 auto",
}));

export const Hamburger = styled.div(() => ({
  display: "none",
  cursor: "pointer",

  "@media (max-width: 768px)": {
    display: "block",
  },
}));

export const MobileMenu = styled.div(() => ({
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
    background: "#1D6453",
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

export const List = styled.ul(() => ({
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

export const ListItem = styled.li(() => ({
  textDecoration: "none",
  color: "#f6f6f3",
  fontSize: "1.5rem",
}));

export const ListItemLink = styled(Link)({
  textDecoration: "none",
  color: "#f6f6f3",
  padding: "0.5rem 1rem",
  fontFamily: "Open Sans",
  "&:hover": {
    color: "#ccc",
  },
});

export const Heading = styled.h1(() => ({
  textAlign: "center",
  color: "#f6f6f3",
  fontSize: "24px",
  fontFamily: "cursive",
}));

export const BasketIcon = styled(BsBasketFill)<{ isOpen: boolean }>(
  ({ isOpen }) => ({

    color: "#f6f6f3",
    marginTop: "0.4rem",
    "@media (max-width: 768px)": {
      display: isOpen ? "block" : "none",
    },
    display: "block",
  })
);
