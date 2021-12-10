import React, { useState } from 'react';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import { AvailableColors } from '@learn-bit-react/ecommerce.ui.product.available-colors';
import { Rating } from '@learn-bit-react/shoe-store.ui.product.rating';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Counter } from '@learn-bit-react/shoe-store.ui.counter';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { SelectSize } from '@learn-bit-react/shoe-store.ui.select-size';

import styles from './product-details.module.scss';

export type ProductDetailsProps = {
  /**
   * id of the product
   */
  id: string;
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
} & React.HTMLAttributes<HTMLDivElement>;

export function ProductDetails({
  id,
  name,
  description,
  sizes,
  colors,
  rating,
  price,
  alt,
  src
}: ProductDetailsProps) {
  const [addedToCart, setAddedToCart] = useState(false);
  function handleClick(id) {
    setAddedToCart(true);
  }

  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(colors[0]);
  const [count, setCount] = useState(1);
  return (
    <div className={styles.productDetails}>
      <Img className={styles.img} src={src} alt={alt} />
      <div className={styles.details}>
        <Heading element="h2">{name}</Heading>
        <Rating stars={rating} />
        <Currency price={price} />
        <Text>{description}</Text>
        <div>
          <Counter setCount={setCount} count={count} />
          <SelectSize
            setSize={setSize}
            className={styles.select}
            sizes={sizes}
          />
        </div>
        <Text>Available in additional colors: </Text>
        <AvailableColors
          color={color}
          className={styles.availableColors}
          availableColors={colors}
          setColor={setColor}
        />
        <Button
          primary
          onClick={() => {
            handleClick(id);
          }}
        >
          Add to Cart
        </Button>
        {addedToCart ? (
          <Text>
            Added to cart {count} x {name} of {size} in {color} color
          </Text>
        ) : null}
      </div>
    </div>
  );
}
