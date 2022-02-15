import React, { useContext } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { ShoeCartContext } from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';
import { Shoe } from '@learn-bit-react/shoe-store.entity.shoes';

import styles from './remove-shoe-from-cart.module.scss';

export type RemoveShoeFromCartProps = {
  /**
   * item in cart
   */
  cartItem: Shoe;
};

export function RemoveShoeFromCart({ cartItem }: RemoveShoeFromCartProps) {
  const context = useContext(ShoeCartContext);
  return (
    <Button
      className={styles.removeFromCart}
      secondary
      onClick={() => context.removeProductFromCart(cartItem)}
    >
      X
    </Button>
  );
}
