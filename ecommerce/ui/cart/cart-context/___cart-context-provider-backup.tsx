// rename file to cart-state

import React, { useReducer } from 'react';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes'; // remove
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
};

export function CartContextProvider<TItemType>(product: TItemType) {
  const products = allShoes;
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const addProductToCart = (
    product // give product a type <TItemType>
    // selectedSize, // remove all these
    // selectedColor,
    // selectedQuantity
  ) => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT,
        product // just product
        // selectedSize,
        // selectedColor,
        // selectedQuantity
        //
      });
    }, 100);
  };

  const removeProductFromCart = (id) => {
    // make it just id must have id
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: id });
    }, 100);
  };

  return (
    <CartContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
