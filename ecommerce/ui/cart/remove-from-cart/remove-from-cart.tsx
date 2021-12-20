import React, { useContext } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { CartContext } from '@learn-bit-react/ecommerce.ui.cart.cart-context';

import styles from './remove-from-cart.module.scss';

export type RemoveFromCartProps = {
  /**
   * item in cart
   */
  cartItem: Object;
};

export function RemoveFromCart({ cartItem }: RemoveFromCartProps) {
  const context = useContext(CartContext);
  return (
    <Button secondary onClick={() => context.removeProductFromCart(cartItem)}>
      Remove from Cart
    </Button>
  );
}
