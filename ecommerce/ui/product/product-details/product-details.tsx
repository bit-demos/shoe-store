import React, { useState } from 'react';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import { AvailableColors } from '@learn-bit-react/ecommerce.ui.product.available-colors';
import { Rating } from '@learn-bit-react/ecommerce.ui.product.rating';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Counter } from '@learn-bit-react/ecommerce.ui.product.counter';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { SelectSize } from '@learn-bit-react/ecommerce.ui.product.select-size';
import { Shoe, Shoes } from '@learn-bit-react/shoe-store.entity.shoes';

import styles from './product-details.module.scss';

export type ProductDetailsProps = {
  /**
   * product
   */
  product: Shoes;
} & React.HTMLAttributes<HTMLDivElement>;

export function ProductDetails({ product }: ProductDetailsProps) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [shoe, setShoe] = useState<Shoe>({} as Shoe);

  const {
    product: { id, src, title, text, price, alt, rating },
    availableColors,
    availableSizes
  } = product;

  function handleClick(id) {
    setAddedToCart(true);
    console.log(shoe);
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
        <Rating stars={rating} className={styles.rating} />
        <Currency price={price} />
        <Text>{text}</Text>
        <div>
          <Counter quantitySelected={quantityChanged} />
          <label htmlFor="size">Choose a size: </label>
          <SelectSize
            id="size"
            sizeSelected={sizeChanged}
            className={styles.select}
            availableSizes={availableSizes}
          />
        </div>
        <Text>Choose a color: </Text>
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
        {/* {addedToCart ? <Text>shoe size: {shoe.size}</Text> : null}

        {addedToCart ? <Text>color: {shoe.color}</Text> : null}

        {addedToCart ? (
          <Text>
            quantity:
            {shoe.quantity}
          </Text>
        ) : null} */}

        {addedToCart ? <Text>Added to cart {title} Shoes</Text> : null}
      </div>
    </div>
  );
}
