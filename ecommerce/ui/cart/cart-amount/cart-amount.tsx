import React, { useContext } from 'react';
import { CartContext } from '@learn-bit-react/ecommerce.ui.cart.cart-context';
import styles from './cart-amount.module.scss';

export function CartAmount() {
  const context = useContext(CartContext());

  return (
    <div className={styles.cartAmount}>
      Cart (
      {context.cart.reduce((count, curItem) => {
        return count + curItem.quantity;
      }, 0)}
      )
    </div>
  );
}
