

import type { ReactNode } from 'react';
import React, { createContext, useState, useEffect } from 'react';


export type CartItemType = {
  variantId: number;
  productName: string;
  description: string;
  image: string;
  price: number;
  amount: number;
};

type CartValueContext = {
  item: CartItemType[];
  addToCart: (productVariant: CartItemType) => void;
  removeFromCart: (id: number) => void;
  getTotalItems: (items: CartItemType[]) => number;
  calculateTotal: (items: CartItemType[]) => number;
  cartOpen: boolean;
  setCartOpen: (cartOpen: boolean) => void;
} | null;

export const CartContext = createContext<CartValueContext>(null);

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])

  // Load cart from local storage
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.variantId === clickedItem.variantId);

      if (isItemInCart) {
        return prev.map(item =>
          item.variantId === clickedItem.variantId
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.variantId === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);


  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  return (
    <CartContext.Provider
      value={{
        item: cartItems,
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
