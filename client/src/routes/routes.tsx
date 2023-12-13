import { styled } from "styled-components";
import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "../utils/notifications";
import { Menu } from "../pages/navbar/menu";
import { ProductsPage } from "../products-page/products-page";
import { NoMatch } from "./no-match";
import { Footer } from "../pages/footer/footer";

const Wrapper = styled.div({
  height: "100%",
  overflow: "hidden",
});

const PageContent = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  padding: "0.75 rem 1.5rem",
  overflowX: "scroll",
  
}));

export function AppRoutes() {
  return (
    <Wrapper>
      <ToastContainer />
      <BrowserRouter>
        <Menu />
        <PageContent>
          <Routes>
            <Route path="/shop" element={<ProductsPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </PageContent>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}
