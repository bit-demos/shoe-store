import React from 'react';
import { FeaturedCard } from '@learn-bit-react/marketing.ui.featured-card';
import classNames from 'classnames';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Product } from '@learn-bit-react/ecommerce.entity.product';

import styles from './featured-card-grid.module.scss';

export type FeaturedCardGridProps = {
  /**
   * a list of products
   */
  list: Product[];
} & React.HTMLAttributes<HTMLDivElement>;

export function FeaturedCardGrid({ list, className }: FeaturedCardGridProps) {
  return (
    <>
      {list.length > 0 ? (
        <div className={classNames(styles.featuredCards, className)}>
          <Heading element="h2" className={styles.heading}>
            Featured Products
          </Heading>
          <div className={classNames(styles.grid, className)}>
            {list.slice(0, 3).map((item) => (
              <div className={styles['product-card']} key={item.id}>
                <FeaturedCard {...item} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        'No featured products to display'
      )}
    </>
  );
}
