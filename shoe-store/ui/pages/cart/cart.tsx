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
      <>
        <div className={styles.cart}>
          <div></div>
          <div className={styles.product}>
            <Heading element="h2">Product Details</Heading>
          </div>
          <div className={styles.center}>
            <Heading element="h4">Quantity</Heading>
          </div>
          <div className={styles.center}>
            <Heading element="h4">Price</Heading>
          </div>
          <div></div>
        </div>
        {context.cart.map((cartItem, index) => (
          <div key={cartItem.item.id + index}>
            <div className={styles.cart}>
              <Img
                className={styles.img}
                src={cartItem.item.src}
                alt={cartItem.item.alt}
              />
              <div className={styles.product}>
                <ul>
                  <li>
                    <Heading element="h3">{cartItem.item.title}</Heading>
                  </li>
                  <li>size: {cartItem.item.size}</li>
                  <li>color: {cartItem.item.color}</li>
                </ul>
              </div>
              <div className={styles.center}>
                <span> {cartItem.quantity}</span>
              </div>
              <div className={styles.center}>
                <Currency price={cartItem.item.price} />
              </div>
              <div className={styles.button}>
                <RemoveShoeFromCart cartItem={{ ...cartItem.item }} />
              </div>
            </div>
          </div>
        ))}
      </>
    </main>
  );
}
