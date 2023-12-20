import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f37d74;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 16px;
  font-weight: 600;
`;

export function Announcement() {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
}

