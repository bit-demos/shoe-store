import React from 'react';
import { Rating } from '@learn-bit-react/ecommerce.ui.product.rating';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import styles from './reviews.module.scss';
import classNames from 'classnames';

export type ReviewsProps = {
  /**
   * rating of the product
   */
  rating: number;
  /**
   * rating of the product
   */
  review: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Reviews({ rating, review, className }: ReviewsProps) {
  return (
    <div className={classNames(styles.reviews, className)}>
      <Heading element="h2" className={styles.heading}>
        Reviews
      </Heading>
      <Rating stars={rating} className={styles.rating} />
      <Text className={styles.review}>{review}</Text>
    </div>
  );
}
