import React, { createContext } from 'react';
export interface CartItemBase {
  id?: string;
}

export type CartListItem<TItemType extends CartItemBase> = {
  /**
   * item in cart
   */
  item: TItemType;
  /**
   * quantity of item in cart
   */
  quantity: number;
};

export type CartContextType<TItemType extends CartItemBase> = {
  // /**
  //  * products in cart
  //  */
  // products: [];
  /**
   * products in cart
   */
  cart: CartListItem<TItemType>[];
  /**
   * adds products to cart
   */
  addProductToCart: (item: CartListItem<TItemType>) => void;
  /**
   * removes products from cart
   */
  removeProductFromCart: (item: CartListItem<TItemType>) => void;
};

const defaultContext: CartContextType<any> = {
  //products: [],
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {}
};

export function CartContext<TItemType extends CartItemBase>() {
  return createContext<CartContextType<TItemType>>(defaultContext);
}

// export const CartContext = React.createContext({
//   // products: [],
//   cart: [],
//   addProductToCart: (product) => {},
//   removeProductFromCart: (id) => {}
// });
