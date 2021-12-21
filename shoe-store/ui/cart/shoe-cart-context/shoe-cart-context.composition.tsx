import React, { useContext } from 'react';
import { ShoeCartContext, ShoeCartContextProvider } from './shoe-cart-context';

import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';

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
        className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-20"
        onClick={() => addProductToCart()}
      >
        Add to Cart
      </button>
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
          <div key={index}>
            <h2>{cartItem.item.title}</h2>
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

export const BasicShoeCartContext = () => {
  return (
    <ShoeCartContextProvider>
      <MockCartDisplay />
      <MockUpdateContextComponent />
    </ShoeCartContextProvider>
  );
};
