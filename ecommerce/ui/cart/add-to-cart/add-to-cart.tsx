import React from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { CartContext } from '@learn-bit-react/ecommerce.ui.cart.cart-context';

import styles from './add-to-cart.module.scss';

export type AddToCartProps = {
  /**
   * product
   */
  product: Object;
  /**
   * selected size
   */
  selectedSize: number;
  /**
   * selected color
   */
  selectedColor: string;
  /**
   * quantity
   */
  selectedQuantity: number;
};

export function AddToCart({
  product,
  selectedSize,
  selectedColor,
  selectedQuantity
}: AddToCartProps) {
  return (
    <CartContext.Consumer>
      {(context) => (
        <Button
          primary
          onClick={() =>
            context.addProductToCart(
              product,
              selectedSize,
              selectedColor,
              selectedQuantity
            )
          }
        >
          Add to Cart
        </Button>
      )}
    </CartContext.Consumer>
  );
}
