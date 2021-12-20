import React from 'react';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export type CartContextProps = {};

const addProductToCart = (
  product, // should be just product
  selectedSize,
  selectedColor,
  selectedQuantity,
  state
) => {
  const updatedCart = [...state.cart];

  updatedCart.push({
    ...product,
    quantity: selectedQuantity,
    selectedSize,
    selectedColor
  });

  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.product.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(
        action.product,
        action.selectedSize,
        action.selectedColor,
        action.selectedQuantity,
        state
      );
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};
