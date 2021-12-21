import React from 'react';
import {
  CartContextProvider,
  CreateCartContext
} from '@learn-bit-react/ecommerce.ui.cart.cart-context';
import { Shoe } from '@learn-bit-react/shoe-store.entity.shoes';

export const ShoeCartContext = CreateCartContext<Shoe>();

export function ShoeCartContextProvider({ children }) {
  return (
    <CartContextProvider<Shoe> context={ShoeCartContext}>
      {children}
    </CartContextProvider>
  );
}
