import React from 'react';
import { ShoeCartContextProvider } from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';
import { AmountOfShoesInCart } from './amount-of-shoes-in-cart';

export const BasicAmountOfShoesInCart = () => (
  <ShoeCartContextProvider>
    <AmountOfShoesInCart />
  </ShoeCartContextProvider>
);
