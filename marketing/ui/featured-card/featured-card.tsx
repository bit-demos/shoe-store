import React from 'react';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import styles from './featured-card.module.scss';

export type FeaturedCardProps = {
  /**
   * alt for image
   */
  alt: string;
  /**
   * src for image
   */
  src: string;
  /**
   * name of the product
   */
  title: string;
  /**
   * price of the product
   */
  price: number;
  /**
   * id of the product
   */
  id: string;
};

export function FeaturedCard({
  alt,
  src,
  title,
  price,
  id
}: FeaturedCardProps) {
  return (
    <div className={styles.featuredCard}>
      <Img src={src} alt={alt} loading="lazy" className={styles.img} />
      <div className={styles.cardBody}>
        <Heading element="h4" className={styles.heading}>
          {title}
        </Heading>
        <Currency price={price} className={styles.price} />
        <Button link primary className={styles.button} href={`/product/${id}`}>
          See Product
        </Button>
      </div>
    </div>
  );
}
