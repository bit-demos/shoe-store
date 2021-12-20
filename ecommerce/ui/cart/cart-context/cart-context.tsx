import { createContext } from 'react';

export type CartListItem<TItemType> = {
  /**
   * item in cart
   */
  item: TItemType;
  /**
   * quantity of item in cart
   */
  quantity: number;
};

export type CartContextType<TItemType> = {
  /**
   * products in cart
   */
  cart: CartListItem<TItemType>[];
  /**
   * adds products to cart
   */
  addProductToCart: (item: TItemType) => void;
  /**
   * removes products from cart
   */
  removeProductFromCart: (item: TItemType) => void;
};

const defaultContext: CartContextType<any> = {
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {}
};

export function CartContext<TItemType>() {
  return createContext<CartContextType<TItemType>>(defaultContext);
}

// export const CartContext = React.createContext({
//   // products: [],
//   cart: [],
//   addProductToCart: (product) => {},
//   removeProductFromCart: (id) => {}
// });
