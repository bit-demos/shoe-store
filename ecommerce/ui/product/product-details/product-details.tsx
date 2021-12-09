import React from 'react';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import { AvailableColors } from '@learn-bit-react/ecommerce.ui.product.available-colors';
import { Rating } from '@learn-bit-react/shoe-store.ui.product.rating';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Counter } from '@learn-bit-react/shoe-store.ui.counter';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { Select } from '@learn-bit-react/shoe-store.ui.forms.select';

import styles from './product-details.module.scss';

export type ProductDetailsProps = {
  /**
   * name of the product
   */
  name: string;
  /**
   * src for image
   */
  src: string;
  /**
   * alt for image
   */
  alt: string;
  /**
   * description of the product
   */
  description: string;
  /**
   * colors for product
   */
  colors: Array<string>;
  /**
   * price of the product
   */
  price: number;
  /**
   * product rating
   */
  rating: number;
  /**
   * product sizes
   */
  sizes: Array<number>;
};

export function ProductDetails({
  name,
  description,
  sizes,
  colors,
  rating,
  price,
  alt,
  src
}: ProductDetailsProps) {
  return (
    <div className={styles.productDetails}>
      <Img className={styles.img} src={src} alt={alt} />
      <div className={styles.details}>
        <Heading element="h2">{name}</Heading>
        <Rating stars={rating} />
        <Currency price={price} />
        <Text>{description}</Text>
        <div>
          <Counter />
          <Select className={styles.select} options={sizes} />
        </div>
        <Text>Available in additional colors: </Text>
        <AvailableColors
          className={styles.availableColors}
          availableColors={colors}
        />
        <Button primary>Add to Cart</Button>
      </div>
    </div>
  );
}
