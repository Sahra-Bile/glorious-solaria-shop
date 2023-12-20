import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ProductVariantProvider } from "./context/product-variant-context";
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
