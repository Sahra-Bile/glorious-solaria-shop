import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { ProductVariantProvider } from "./context/product-variant-context";
import { AppRoutes } from "./routes/routes";
import { CartProvider } from './context/cart-context';
import { AuthProvider } from './context/auth-context';


const queryClient = new QueryClient();

export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string);



export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Elements stripe={stripePromise}>
          <ProductVariantProvider>
            <CartProvider>
              <AppRoutes />
            </CartProvider>
          </ProductVariantProvider>
        </Elements>
      </AuthProvider>
    </QueryClientProvider>
  );
}
