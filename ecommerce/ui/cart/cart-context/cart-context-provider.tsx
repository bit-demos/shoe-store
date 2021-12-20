import React, { useReducer, useState, HTMLAttributes } from 'react';
import { CartContextType, CartListItem } from './cart-context';

import {
  CartContext,
  cartReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from '@learn-bit-react/ecommerce.ui.cart.cart-context';

export type CartContextProps<TItemType> = {
  productId: string;
  context: React.Context<CartContextType<TItemType>>;
} & HTMLAttributes<HTMLDivElement>;

export function CartContextProvider<TItemType>({
  children,
  // product,
  // productId,
  context
}: CartContextProps<TItemType>) {
  //const [products, setProducts] = useState<CartListItem<TItemType>[]>([]);

  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT,
        product
      });
    }, 100);
  };

  const removeProductFromCart = (id) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: id });
    }, 100);
  };
  const contextValue: CartContextType<TItemType> = {
    //products: products,
    cart: cartState.cart,
    addProductToCart: addProductToCart,
    removeProductFromCart: removeProductFromCart
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}
