import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProductVariantProvider } from "./context/product-variant-context";
import { ProductsPage } from "./products-page/products-page";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterProvider } from "./context/filter-context";
import { Sidebar } from "./pages/sidebar";

import { Menu } from "./pages/navbar/menu";
import { Footer } from "./pages/footer/footer";
import { styled } from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
`;

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PageWrapper>
          <Menu />
          <MainContent>
            <ProductVariantProvider>
              <ProductsPage />
            </ProductVariantProvider>
          </MainContent>
          <Footer />
        </PageWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
