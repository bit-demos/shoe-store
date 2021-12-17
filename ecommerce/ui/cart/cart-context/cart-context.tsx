import React from 'react';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';

export type CartContextProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export const CartContext = React.createContext({
  products: allShoes,
  cart: [],
  addProductToCart: (
    product,
    selectedSize,
    selectedColor,
    selectedQuantity
  ) => {},
  removeProductFromCart: (productId) => {}
});
