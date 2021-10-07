import React from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { Card } from '@learn-bit-react/base-ui.ui.card';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import styles from './shoes-card.module.scss';

export type ShoesCardProps = {
  /**
   * text for button
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
};

export function ShoesCard({
  alt,
  src,
  title,
  text,
  price,
  buttonText
}: ShoesCardProps) {
  return (
    <Card>
      <div className={styles.card}>
        <div className={styles.header}>
          <Heading element="h3" className={styles.title}>
            {title}
          </Heading>
          <Text text={text} className={styles.text} />
        </div>
        <div className="prod-img">
          <Img alt={alt} src={src} className={styles.img} />
        </div>
        <div className={styles.footer}>
          <Currency price={price} className={styles.price} />
          <Button primary className={styles.button}>
            {buttonText}
          </Button>
        </div>
      </div>
    </Card>
  );
}
