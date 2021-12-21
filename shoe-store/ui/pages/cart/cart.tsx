import React, { useContext } from 'react';
import { CartContext } from '@learn-bit-react/ecommerce.ui.cart.cart-context';
import { RemoveFromCart } from '@learn-bit-react/ecommerce.ui.cart.remove-from-cart';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import styles from './cart.module.scss';

export type CartProps = {} & React.HTMLAttributes<HTMLElement>;

export function Cart({ children }: CartProps) {
  const context = useContext(CartContext());
  return (
    <main>
      {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
      <ul>
        {context.cart.map((cartItem, index) => (
          <li key={cartItem.product.id + index}>
            <div className={styles.cart}>
              <Img
                className={styles.img}
                src={cartItem.product.src}
                alt={cartItem.product.alt}
              />
              <div className={styles.product}>
                <h2>{cartItem.product.title}</h2>
                <p> {cartItem.product.price}</p>
              </div>
              <div>
                <ul>
                  <li>size: {cartItem.selectedSize}</li>
                  <li>color: {cartItem.selectedColor}</li>
                  <li>color: {cartItem.quantity}</li>
                </ul>
              </div>
              <div className={styles.button}>
                <RemoveFromCart cartItem={cartItem.product.id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
