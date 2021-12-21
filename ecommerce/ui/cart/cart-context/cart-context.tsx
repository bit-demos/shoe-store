import { createContext } from 'react';
export interface CartItemBase {
  id: string;
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
  /**
   * items in cart
   */
  cart: CartListItem<TItemType>[];
  /**
   * adds products to cart
   */
  addProductToCart: (item: CartListItem<TItemType>) => void;
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

export function CreateCartContext<TItemType extends CartItemBase>() {
  return createContext<CartContextType<TItemType>>(defaultContext);
}
