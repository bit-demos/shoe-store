import React from 'react';
import classNames from 'classnames';
import { ShoesCard } from '@learn-bit-react/shoe-store.ui.shoes.shoes-card';
import { Shoes } from '@learn-bit-react/shoe-store.entity.shoes';
import styles from './shoes-card-grid.module.scss';

export type ShoesCardGridProps = {
  /**
   * a list of products
   */
  list: Shoes[];
} & React.HTMLAttributes<HTMLDivElement>;

export function ShoesCardGrid({ list, className }: ShoesCardGridProps) {
  return (
    <>
      {list.length > 0 ? (
        <div className={classNames(styles.grid, className)}>
          {list.map((item) => (
            <div className={styles['product-card']} key={item.product.id}>
              <ShoesCard {...item.product} id={item.product.id} />
            </div>
          ))}
        </div>
      ) : (
        'No products to display'
      )}
    </>
  );
}
