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
import { Shoe, Shoes } from '@learn-bit-react/shoe-store.entity.shoes';

import styles from './product-details.module.scss';

export type ProductDetailsProps = {
  /**
   * product
   */
  product: Shoes;
  // id: string;
  // title: string;
  // text: string;
  // alt: string;
  // src: string;
  // price: number;
  // availableSizes: number[];
  // availableColors: string[];
} & React.HTMLAttributes<HTMLDivElement>;

export function ProductDetails({
  // id,
  // alt,
  // src,
  // title,
  // text,
  // availableSizes,
  // availableColors
  product
}: ProductDetailsProps) {
  // use add to cart state
  const [addedToCart, setAddedToCart] = useState(false);
  // use shoe state to store the shoe selected
  const [shoe, setShoe] = useState<Shoe>({} as Shoe);
  // destruction product so easier to use below
  const {
    product: { id, src, title, text, price, alt, rating },
    availableColors,
    availableSizes
  } = product;

  // when button is clicked perform perform this action
  function handleClick(id) {
    setAddedToCart(true);
    // context.addToCart(shoe); // comes from context
  }

  function sizeChanged(size) {
    setShoe({ ...shoe, size: size });
  }

  function colorChanged(color) {
    setShoe({ ...shoe, color: color });
  }

  function quantityChanged(quantity) {
    setShoe({ ...shoe, quantity: quantity });
  }

  return (
    <div className={styles.productDetails}>
      <Img className={styles.img} src={src} alt={alt} />
      <div className={styles.details}>
        <Heading element="h2">{title}</Heading>
        <Rating stars={rating} />
        <Currency price={price} />
        <Text>{shoe.text}</Text>
        <div>
          <Counter quantitySelected={quantityChanged} />
          <SelectSize
            sizeSelected={sizeChanged}
            className={styles.select}
            availableSizes={availableSizes}
          />
        </div>
        <Text>Available in additional colors: </Text>
        <AvailableColors
          colorSelected={colorChanged}
          className={styles.availableColors}
          availableColors={availableColors}
        />
        <Button
          primary
          onClick={() => {
            handleClick(id);
          }}
        >
          Add to Cart
        </Button>
        Selected: shoe size: {shoe.size}, color: {shoe.color}, quantity:
        {shoe.quantity}
        {addedToCart ? <Text>Added to cart</Text> : null}
      </div>
    </div>
  );
}
