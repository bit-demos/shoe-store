import React, { useContext } from 'react';
import { ShoeCartContext } from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';
import { RemoveShoeFromCart } from '@learn-bit-react/shoe-store.ui.cart.remove-shoe-from-cart';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { EmptyCart } from '@learn-bit-react/ecommerce.ui.cart.empty-cart';
import styles from './cart.module.scss';

export type CartProps = {} & React.HTMLAttributes<HTMLElement>;

export function Cart({}: CartProps) {
  const context = useContext(ShoeCartContext);
  return (
    <main>
      {context.cart.length <= 0 && <EmptyCart />}
      <ul>
        {context.cart.map((cartItem, index) => (
          <li key={cartItem.item.id + index}>
            <div className={styles.cart}>
              <Img
                className={styles.img}
                src={cartItem.item.src}
                alt={cartItem.item.alt}
              />
              <div className={styles.product}>
                <Heading element="h3">{cartItem.item.title}</Heading>
                <Currency price={cartItem.item.price} />
              </div>
              <div>
                <ul>
                  <li>size: {cartItem.item.size}</li>
                  <li>color: {cartItem.item.color}</li>
                  <li>quantity: {cartItem.quantity}</li>
                </ul>
              </div>
              <div className={styles.button}>
                <RemoveShoeFromCart cartItem={{ ...cartItem.item }} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
