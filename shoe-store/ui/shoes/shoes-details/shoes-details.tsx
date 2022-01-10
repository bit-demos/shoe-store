import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import { Label } from '@learn-bit-react/base-ui.ui.forms.label';
import { AvailableColors } from '@learn-bit-react/ecommerce.ui.product.available-colors';
import { Rating } from '@learn-bit-react/ecommerce.ui.product.rating';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Counter } from '@learn-bit-react/ecommerce.ui.product.counter';
import { SelectSize } from '@learn-bit-react/ecommerce.ui.product.select-size';
import { CatalogShoe } from '@learn-bit-react/shoe-store.entity.shoes';
import { AddShoeToCart } from '@learn-bit-react/shoe-store.ui.cart.add-shoe-to-cart';
import { ShoeCartContext } from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';

import styles from './shoes-details.module.scss';

export type ShoesDetailsProps = {
  /**
   * product
   */
  catalogShoe: CatalogShoe;
} & React.HTMLAttributes<HTMLDivElement>;

export function ShoesDetails({ catalogShoe, className }: ShoesDetailsProps) {
  const context = useContext(ShoeCartContext);
  const [selectedSize, setSelectedSize] = useState(
    catalogShoe.availableSizes[0]
  );
  const [selectedColor, setSelectedColor] = useState(
    catalogShoe.availableColors[0]
  );
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const {
    shoe: { id, src, title, text, price, alt, rating },
    availableColors,
    availableSizes
  } = catalogShoe;

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
    <div className={classNames('flex flex-row', className)}>
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
            <Counter onCountChange={quantityChanged} className="my-4" />
            <div className="my-4">
              <SelectSize
                sizeSelected={sizeChanged}
                availableSizes={catalogShoe.availableSizes}
              />
            </div>
          </div>
          <Label>Choose a color: </Label>
          <AvailableColors
            colorSelected={colorChanged}
            className={styles.availableColors}
            availableColors={catalogShoe.availableColors}
          />
          <AddShoeToCart
            item={{
              ...catalogShoe.shoe,
              size: selectedSize,
              color: selectedColor
            }}
            quantity={selectedQuantity}
          />
        </div>
      </div>
    </div>
  );
}
