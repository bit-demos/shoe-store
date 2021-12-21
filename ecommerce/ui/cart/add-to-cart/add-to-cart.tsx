import React, { useContext } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { CartContext } from '@learn-bit-react/ecommerce.ui.cart.cart-context';

import styles from './add-to-cart.module.scss';

export type AddToCartProps<TItemType> = {
  // generic type
  /**
   * product
   */
  product: TItemType; // change type
  // /**
  //  * selected size
  //  */
  // selectedSize: number; // remove
  // /**
  //  * selected color
  //  */
  // selectedColor: string;
  // /**
  //  * quantity
  //  */
  // selectedQuantity: number;
};

export function AddToCart<ATCItemType>({
  product
}: // selectedSize,
// selectedColor,
// selectedQuantity
AddToCartProps<ATCItemType>) {
  const context = useContext(CartContext<ATCItemType>());

  return (
    <Button
      className={styles.addToCart}
      primary
      onClick={() =>
        context.addProductToCart(
          product
          // selectedSize,
          // selectedColor,
          // selectedQuantity
        )
      }
    >
      Add to Cart
    </Button>
  );
}
