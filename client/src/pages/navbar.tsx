import React from "react";
import { styled } from "styled-components";

const Header = styled.div(() => ({
    
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  borderBottom: "1px solid #ccc",
}));

export function Navbar() {
  return (
  <Header/>
  );
}
