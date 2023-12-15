import { styled } from "styled-components";
import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "../utils/notifications";
import { NoMatch } from "./no-match";
import {
  Navbar,
  AboutUs,
  Contact,
  Footer,
  HomePage,
  ProductPage,
  ProductDetails,
} from "../pages";
import { ScrollToTop } from "../helpers/scroll";

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
      <ScrollToTop/>
        <Navbar />
        <PageContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductPage />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
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
