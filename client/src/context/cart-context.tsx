

import type { ReactNode } from 'react';
import React, { createContext, useState, useEffect, useContext } from 'react';

import type { ProductVariantsParams } from '../api/api-service.types';


export type CartItemType = {
  product: ProductVariantsParams
  amount: number;
};

type CartValueContext = {
  cartItems: CartItemType[];
  addToCart: (productVariant: CartItemType) => void;
  removeFromCart: (id: number) => void;
  getTotalItems: (items: CartItemType[]) => number;
  calculateTotal: (items: CartItemType[]) => number;
  cartOpen: boolean;
  setCartOpen: (cartOpen: boolean) => void;
} | null;

const CartContext = createContext<CartValueContext>(null);

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = localStorage.getItem('cart');
      if (updatedCart) {
        setCartItems(JSON.parse(updatedCart));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);



  const addToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // Check if the item is already in the cart
      const isItemInCart = prev.find(item => item.product.variantId === clickedItem.product.variantId);

      if (isItemInCart) {
        // Update the quantity of the existing item
        return prev.map(item =>
          item.product.variantId === clickedItem.product.variantId
            ? { ...item, amount: item.amount + clickedItem.amount }
            : item
        );
      }
      // Item is not in the cart, add it with its amount
      return [...prev, clickedItem];
    });
  };


  const removeFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.product.variantId === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.product.price, 0);


  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalItems,
        calculateTotal,
        cartOpen,
        setCartOpen,

      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartItems = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCartItems must be used within a CartProvider"
    );
  }
  return context;
};
