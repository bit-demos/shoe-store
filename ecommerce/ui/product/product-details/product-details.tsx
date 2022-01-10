import React, { useState } from 'react';
import classNames from 'classnames';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import { Rating } from '@learn-bit-react/ecommerce.ui.product.rating';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Counter } from '@learn-bit-react/ecommerce.ui.product.counter';
import { Product } from '@learn-bit-react/ecommerce.entity.product';
// import { AddToCart } from '@learn-bit-react/ecommerce.ui.cart.add-to-cart';

import styles from './product-details.module.scss';

export type ProductDetailsProps = {
  /**
   * product
   */
  catalogProduct: Product;
} & React.HTMLAttributes<HTMLDivElement>;

export function ProductDetails({ catalogProduct }: ProductDetailsProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

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
          src={catalogProduct.src}
          alt={catalogProduct.alt}
        />
        <div className={classNames(styles.details, 'xs:p-16 md:pl-16')}>
          <Heading element="h2" className="text-5xl mb-8">
            {catalogProduct.title}
          </Heading>
          <Rating stars={catalogProduct.rating} className="mb-4" />
          <Currency price={catalogProduct.price} className="mb-4 text-2xl" />
          <Text className="mb-4">{catalogProduct.text}</Text>
          <div>
            <Counter onCountChange={quantityChanged} className="my-4" />
          </div>

          {/* <AddToCart item={catalogProduct} quantity={selectedQuantity} /> */}
        </div>
      </div>
    </div>
  );
}
