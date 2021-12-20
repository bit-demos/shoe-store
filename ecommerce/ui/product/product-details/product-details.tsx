import React, { useState, useContext, useReducer, useEffect } from 'react';
import classNames from 'classnames';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import { AvailableColors } from '@learn-bit-react/ecommerce.ui.product.available-colors';
import { Rating } from '@learn-bit-react/ecommerce.ui.product.rating';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Counter } from '@learn-bit-react/ecommerce.ui.product.counter';
import { SelectSize } from '@learn-bit-react/ecommerce.ui.product.select-size';
import { Shoes } from '@learn-bit-react/shoe-store.entity.shoes';
import { AddToCart } from '@learn-bit-react/ecommerce.ui.cart.add-to-cart';
import styles from './product-details.module.scss';

export type ProductDetailsProps = {
  /**
   * product
   */
  product: Shoes;
} & React.HTMLAttributes<HTMLDivElement>;

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0]);
  const [selectedColor, setSelectedColor] = useState(
    product.availableColors[0]
  );
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const {
    product: { id, src, title, text, price, alt, rating },
    availableColors,
    availableSizes
  } = product;

  function sizeChanged(size) {
    setSelectedSize(parseInt(size));
  }

  function colorChanged(color) {
    setSelectedColor(color);
  }

  function quantityChanged(quantity) {
    setSelectedQuantity(quantity);
  }

  return (
    <div className="flex flex-row">
      <div
        className={classNames(
          styles.productDetails,
          'flex flex-col pt-6 md:flex-row '
        )}
      >
        <Img
          className={classNames(styles.img, 'mx-auto md:mx-0')}
          src={src}
          alt={alt}
        />
        <div className={classNames(styles.details, 'xs:p-16 md:pl-16')}>
          <Heading element="h2" className="text-5xl mb-8">
            {title}
          </Heading>
          <Rating stars={rating} className="mb-4" />
          <Currency price={price} className="mb-4 text-2xl" />
          <Text className="mb-4">{text}</Text>
          <div>
            <Counter quantitySelected={quantityChanged} className="my-4" />
            <div className="my-4">
              <label htmlFor="size">Choose a size: </label>
              <SelectSize
                id="size"
                sizeSelected={sizeChanged}
                className={styles.select}
                availableSizes={availableSizes}
              />
            </div>
          </div>
          <Text>Choose a color: </Text>
          <AvailableColors
            colorSelected={colorChanged}
            className={styles.availableColors}
            availableColors={availableColors}
          />
          <AddToCart
            product={product}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            selectedQuantity={selectedQuantity}
          />
        </div>
      </div>
    </div>
  );
}
