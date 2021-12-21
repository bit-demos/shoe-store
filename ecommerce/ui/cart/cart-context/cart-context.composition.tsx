import React, { useContext } from 'react';
import {
  Product,
  mockProductFromApi
} from '@learn-bit-react/ecommerce.entity.product';
import { CreateCartContext } from './cart-context';
import { CartContextProvider } from './cart-context-provider';

const contextObject = CreateCartContext<Product>();

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
        className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-20"
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

export const BasicCartUsage = () => {
  return (
    <CartContextProvider<Product> context={contextObject}>
      <MockCartDisplay />
      <MockUpdateContextComponent />
    </CartContextProvider>
  );
};
