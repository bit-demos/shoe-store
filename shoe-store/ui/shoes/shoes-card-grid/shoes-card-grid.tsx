import React from 'react';
import classNames from 'classnames';
import { ShoesCard } from '@learn-bit-react/shoe-store.ui.shoes.shoes-card';
import { CatalogShoe } from '@learn-bit-react/shoe-store.entity.shoes';
import styles from './shoes-card-grid.module.scss';

export type ShoesCardGridProps = {
  /**
   * a list of products
   */
  list: CatalogShoe[];
} & React.HTMLAttributes<HTMLDivElement>;

export function ShoesCardGrid({ list, className }: ShoesCardGridProps) {
  return (
    <>
      {list.length > 0 ? (
        <div className={classNames(styles.grid, className)}>
          {list.map((item) => (
            <div className={styles['product-card']} key={item.shoe.id}>
              <ShoesCard {...item.shoe} id={item.shoe.id} />
            </div>
          ))}
        </div>
      ) : (
        <p>No products to display</p>
      )}
    </>
  );
}
