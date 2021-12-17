import React from 'react';
import styles from './cart-amount.module.scss';

export type CartAmountProps = {
  /**
   * a text to be rendered in the component.
   */
  cartItemNumber: number;
};

export function CartAmount({ cartItemNumber }: CartAmountProps) {
  return <header className="main-navigation">Cart ({cartItemNumber})</header>;
}
