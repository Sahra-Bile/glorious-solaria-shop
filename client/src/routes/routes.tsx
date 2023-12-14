import { styled } from "styled-components";
import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "../utils/notifications";
import { Navbar } from "../pages/navbar/navbar";
import { ProductsPage } from "../products-page/products-page";
import { NoMatch } from "./no-match";
import { Footer } from "../pages/footer/footer";
import { Contact } from "../pages/contact/contact";
import { HomePage } from "../pages/home-page/home-page";
import { AboutUs } from "../pages/about-us/about-us";

const Wrapper = styled.div({
  height: "100%",
  overflow: "hidden",
});

const PageContent = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  padding: "0.75rem 1.5rem",
  overflowX: "scroll",
  
}));

export function AppRoutes() {
  return (
    <Wrapper>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <PageContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductsPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </PageContent>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}
