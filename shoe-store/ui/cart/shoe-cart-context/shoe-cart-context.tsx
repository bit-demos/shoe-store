import React from 'react';
import styles from './shoe-cart-context.module.scss';


export type ShoeCartContextProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function ShoeCartContext({ text }: ShoeCartContextProps) {
  return (
    <div className={styles.shoe-cart-context}>
      {text}
    </div>
  );
}
