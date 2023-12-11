import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProductVariantProvider } from "./context/product-variant-context";
import { ProductsPage } from "./products-page/products-page";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterProvider } from "./context/filter-context";
import { Sidebar } from "./pages/sidebar";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ProductVariantProvider>
          <FilterProvider>
            <Sidebar />
          <ProductsPage />
          </FilterProvider>
         
        </ProductVariantProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
