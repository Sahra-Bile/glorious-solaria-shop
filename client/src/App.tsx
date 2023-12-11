import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProductVariantProvider } from "./context/product-variant-context";
import { ProductsPage } from "./products-page/products-page";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterProvider } from "./context/filter-context";
import { Sidebar } from "./pages/sidebar";
import { Navbar } from "./pages/navbar";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Navbar/>
        <ProductVariantProvider>
          {/* <FilterProvider>
            <Sidebar />
           <ProductsPage />
          </FilterProvider> */}
          <ProductsPage />
        </ProductVariantProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
