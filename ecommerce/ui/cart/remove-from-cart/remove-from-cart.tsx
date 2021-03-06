import React, { useContext } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { CreateCartContext } from '@learn-bit-react/ecommerce.ui.cart.cart-context';

import styles from './remove-from-cart.module.scss';

export type RemoveFromCartProps<TItemType> = {
  /**
   * item in cart
   */
  cartItem: TItemType;
  quantity: number;
};

export function RemoveFromCart<RFCItemType>({
  cartItem
}: RemoveFromCartProps<RFCItemType>) {
  const context = useContext(CreateCartContext<RFCItemType>());
  return (
    <Button
      className={styles.removeFromCart}
      secondary
      onClick={() => context.removeProductFromCart(cartItem)}
    >
      Remove from Cart
    </Button>
  );
}
