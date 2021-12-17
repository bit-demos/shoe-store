import React, { useReducer } from 'react';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';
import {
  CartContext,
  cartReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from '@learn-bit-react/ecommerce.ui.cart.cart-context';

export type CartContextProps = {};

export const GlobalState = (props) => {
  const products = allShoes;
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const addProductToCart = (
    product,
    selectedSize,
    selectedColor,
    selectedQuantity
  ) => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT,
        product,
        selectedSize,
        selectedColor,
        selectedQuantity
      });
    }, 100);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
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
      {props.children}
    </CartContext.Provider>
  );
};
