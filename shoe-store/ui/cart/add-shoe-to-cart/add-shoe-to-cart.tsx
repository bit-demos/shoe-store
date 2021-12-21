import React, { useContext } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { ShoeCartContext } from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';
import { Shoe } from '@learn-bit-react/shoe-store.entity.shoes';
import styles from './add-shoe-to-cart.module.scss';

export type AddShoeToCartProps = {
  /**
   * item to be added to the cart
   */
  item: Shoe;
  /**
   * quantity of item to be added to the cart
   */
  quantity: number;
};

export function AddShoeToCart({ item, quantity }: AddShoeToCartProps) {
  const context = useContext(ShoeCartContext);

  return (
    <Button
      className={styles.addToCart}
      primary
      onClick={() => context.addProductToCart({ item, quantity })}
    >
      Add to Cart
    </Button>
  );
}
