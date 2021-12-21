import React, { useContext } from 'react';
import {
  ShoeCartContext,
  ShoeCartContextProvider
} from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';

import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';
import { RemoveShoeFromCart } from './remove-shoe-from-cart';
import { createWriteStream } from 'fs';

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
            <RemoveShoeFromCart cartItem={cartItem.item} />
          </div>
        );
      })}
    </div>
  );
};

export const BasicRemoveShoeFromCart = () => {
  return (
    <RemoveShoeFromCart
      cartItem={{
        id: 'w-1',
        title: 'Guchi',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus',
        alt: 'Pair of Nike Air trainers in pink, yellow and purple',
        src: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        price: 190,
        rating: 4,
        size: 39,
        color: 'red'
      }}
    />
  );
};

export const FunctionalRemoveShoeFromCart = () => {
  return (
    <ShoeCartContextProvider>
      <MockCartDisplay />
      <MockUpdateContextComponent />
    </ShoeCartContextProvider>
  );
};
