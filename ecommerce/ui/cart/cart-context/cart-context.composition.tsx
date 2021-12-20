import React, { useContext } from 'react';
import { CartContext } from './cart-context';
import { Product } from '@learn-bit-react/ecommerce.entity.product';
import { CartContextProvider } from './cart-context-provider';

const contextObject = CartContext<Product>();

const MockUpdateContextComponent = () => {
  const context = useContext(contextObject);

  function addProductToCart() {
    context.addProductToCart(Product.fromApiObject(Product[0]));
  }

  return (
    <div>
      <button onClick={context.addProductToCart}>Add to Cart</button>
    </div>
  );
};

export const MockCartDisplay = () => {
  const context = useContext(contextObject);
  return (
    <div>
      {context.cart.map((cartItem, index) => {
        return (
          <div key={cartItem.item.id + index}>
            <h2>{cartItem.item.title}</h2>
            <p> {cartItem.item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const BasicCartUsage = () => {
  return (
    <CartContextProvider<Product> productId="id" context={contextObject}>
      <MockUpdateContextComponent />
      <MockCartDisplay />
    </CartContextProvider>
  );
};
