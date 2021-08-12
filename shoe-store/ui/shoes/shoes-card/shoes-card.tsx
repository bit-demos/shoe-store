import React from 'react';
import { Link } from '@learn-bit-react/base-ui.ui.link';
import { Card } from '@learn-bit-react/base-ui.ui.card';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import { Price } from '@learn-bit-react/ecommerce.ui.product.price';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { AvailableColors } from '@learn-bit-react/ecommerce.ui.product.available-colors';
import styles from './shoes-card.module.scss';

export type ShoesCardProps = {
  /**
   * text for the button
   */
  buttonText: string;
  /**
   * products price
   */
  price: number;
  /**
   * products image src
   */
  src: string;
  /**
   * products image alternative text
   */
  alt: string;
  /**
   * products description
   */
  text: string;
  /**
   * title of the product
   */
  title: string;
  /**
   * size of shoes available
   */
  size: number[];
  /**
   * color of shoes available
   */
  availableColors: string[];
};

export function ShoesCard({
  alt,
  src,
  title,
  text,
  price,
  buttonText,
  availableColors
}: ShoesCardProps) {
  return (
    <Card>
      <div className={styles.card}>
        <div className="prod-title">
          <Heading element="h3" className={styles.title}>
            {title}
          </Heading>
          <Text text={text} className={styles.text} />
        </div>
        <div className="prod-img">
          <Img alt={alt} src={src} className={styles.img} />
        </div>
        <div className={styles.info}>
          <AvailableColors availableColors={availableColors} />
        </div>
        <div className={styles.footer}>
          <Price price={price} className={styles.price} />
          <Link
            href={`/${title.toLowerCase()}`}
            buttonClass
            variation="primary"
            className={styles.button}>
            {buttonText}
          </Link>
        </div>
      </div>
    </Card>
  );
}
