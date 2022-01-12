import React, { useContext } from 'react';
import { AddShoeToCart } from './add-shoe-to-cart';
import {
  ShoeCartContext,
  ShoeCartContextProvider
} from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';

import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';

const MockUpdateContextComponent = () => {
  const catalogShoe = allShoes[Math.floor(Math.random() * 9)];

  return (
    <div>
      <AddShoeToCart
        item={{
          ...catalogShoe.shoe,
          size: 36,
          color: 'red'
        }}
        quantity={1}
      />
    </div>
  );
};

const MockCartDisplay = () => {
  const context = useContext(ShoeCartContext);

  return (
    <div>
      <h2>Cart:</h2>
      {context.cart.map((cartItem, index) => {
        return (
          <div key={index} data-testid="cart">
            <h3>{cartItem.item.title}</h3>
            <p>$ {cartItem.item.price}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded p-20"
              onClick={() => context.removeProductFromCart(cartItem.item)}
            >
              Remove from Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export const BasicAddShoeToCart = () => {
  return (
    <ShoeCartContextProvider>
      <MockCartDisplay />
      <MockUpdateContextComponent />
    </ShoeCartContextProvider>
  );
};
