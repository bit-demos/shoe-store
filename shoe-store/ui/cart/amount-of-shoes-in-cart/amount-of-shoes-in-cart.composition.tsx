import React, { useContext } from 'react';
import {
  ShoeCartContext,
  ShoeCartContextProvider
} from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';
import { AmountOfShoesInCart } from './amount-of-shoes-in-cart';

export const BasicAmountOfShoesInCart = () => (
  <ShoeCartContextProvider>
    <AmountOfShoesInCart />
  </ShoeCartContextProvider>
);

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
  function removeProductFromCart(cartItem) {
    context.removeProductFromCart(cartItem.item);
  }
  return (
    <div>
      <h2>Cart:</h2>
      {context.cart.map((cartItem, index) => {
        return (
          <div key={index} data-testid="cart">
            <h2>{cartItem.item.title}</h2>
            <p>$ {cartItem.item.price}</p>
            <button
              className="bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-1 px-2 rounded p-20"
              onClick={() => removeProductFromCart(cartItem)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export const FunctionalAmountOfShoesInCart = () => {
  return (
    <ShoeCartContextProvider>
      <AmountOfShoesInCart />
      <MockCartDisplay />
      <MockUpdateContextComponent />
    </ShoeCartContextProvider>
  );
};
