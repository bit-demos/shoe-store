import React, { useContext } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { CreateCartContext } from '@learn-bit-react/ecommerce.ui.cart.cart-context';
import styles from './add-to-cart.module.scss';

export type AddToCartProps<ItemType> = {
  /**
   * product
   */
  item: ItemType;
  /**
   * quantity
   */
  quantity: number;
};

export function AddToCart<ATCItemType>({
  item,
  quantity
}: AddToCartProps<ATCItemType>) {
  const context = useContext(CreateCartContext<ATCItemType>());

  return (
    <Button
      className={styles.addToCart}
      primary
      onClick={() => context.addProductToCart({ item, quantity })}
    >
      Add to Cart
    </Button>
  );
}
