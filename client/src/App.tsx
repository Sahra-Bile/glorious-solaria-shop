import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProductVariantProvider } from "./context/product-variant-context";
import { ProductsPage } from "./products-page/products-page";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ProductVariantProvider>
          <ProductsPage />
        </ProductVariantProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
