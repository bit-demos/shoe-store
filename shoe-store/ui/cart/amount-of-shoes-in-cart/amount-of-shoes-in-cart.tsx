import React, { useContext } from 'react';
import { ShoeCartContext } from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';
import styles from './amount-of-shoes-in-cart.module.scss';

export function AmountOfShoesInCart() {
  const context = useContext(ShoeCartContext);

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
