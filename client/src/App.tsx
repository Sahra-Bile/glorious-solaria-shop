import React from "react";

import { ProductVariantProvider } from "./context/product-variant-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./routes/routes";



const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductVariantProvider>
        <AppRoutes />
      </ProductVariantProvider>
    </QueryClientProvider>
  );
}
