import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ProductVariantProvider } from "./context/product-variant-context";
import { AppRoutes } from "./routes/routes";
import { CartProvider } from './context/cart-context';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductVariantProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </ProductVariantProvider>
    </QueryClientProvider>
  );
}
