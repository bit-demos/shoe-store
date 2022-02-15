import React, { useContext } from 'react';
import {
  ShoeCartContext,
  ShoeCartContextProvider
} from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';
import { Cart } from './cart';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';

export const EmptyCart = () => <Cart />;

const MockUpdateContextComponent = () => {
  const context = useContext(ShoeCartContext);

  const catalogShoe = allShoes[Math.floor(Math.random() * 9)];

  function addProductToCart() {
    context.addProductToCart({
      item: {
        ...catalogShoe.shoe,
        size: 5,
        color: 'red'
      },
      quantity: 1
    });
  }

  return (
    <div>
      <button
        className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-8 rounded p-20"
        onClick={() => addProductToCart()}
      >
        Add to Cart
      </button>
    </div>
  );
};

export const FilledCart = () => {
  return (
    <ShoeCartContextProvider>
      <MockUpdateContextComponent />
      <Cart />
    </ShoeCartContextProvider>
  );
};
