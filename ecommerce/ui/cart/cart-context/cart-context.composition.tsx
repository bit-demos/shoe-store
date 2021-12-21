import React, { useContext } from 'react';
import { CartContext } from './cart-context';
import {
  Product,
  mockProductFromApi
} from '@learn-bit-react/ecommerce.entity.product';
import { CartContextProvider } from './cart-context-provider';

const contextObject = CartContext<Product>();

const MockUpdateContextComponent = () => {
  const context = useContext(contextObject);
  const item = Product.fromApiObject(
    mockProductFromApi[Math.floor(Math.random() * 9)]
  );
  function addProductToCart() {
    context.addProductToCart({ item, quantity: 1 });
  }

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-20"
        onClick={() => addProductToCart()}
      >
        Add to Cart
      </button>
    </div>
  );
};

const MockCartDisplay = () => {
  const context = useContext(contextObject);

  return (
    <div>
      <h2>Cart:</h2>
      {context.cart.map((cartItem, index) => {
        return (
          <div key={index}>
            <h2>{cartItem.item.title}</h2>
            <p> {cartItem.item.price}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-20"
              onClick={() => context.removeProductFromCart(cartItem)}
            >
              Remove from Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export const BasicCartUsage = () => {
  return (
    <CartContextProvider<Product> context={contextObject}>
      <MockCartDisplay />
      <MockUpdateContextComponent />
    </CartContextProvider>
  );
};
