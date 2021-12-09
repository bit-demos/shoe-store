import React from 'react';
import { ProductDetails } from '@learn-bit-react/shoe-store.ui.product.product-details';
import styles from './product.module.scss';

export type ProductProps = {};

export function Product({}: ProductProps) {
  return (
    <div className={styles.product}>
      <ProductDetails
        name="Nike Air"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"
        alt="Nike Air"
        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHNuZWFrZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        price={160}
        sizes={[36, 38]}
        rating={4}
        colors={['red', 'blue']}
      />
      <h2>reviews component</h2>
      <h2>featured-products component</h2>
      <h3>banner component</h3>
    </div>
  );
}
