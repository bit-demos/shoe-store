import React from 'react';
import { ProductDetails } from '@learn-bit-react/ecommerce.ui.product.product-details';
import { useParams } from 'react-router-dom';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';
import styles from './product.module.scss';

function getShoe(shoeId: string) {
  return allShoes.find(({ product }) => shoeId === product.id) || allShoes[0];
}

export function Product() {
  const { id } = useParams() as { id: string };
  const shoe = getShoe(id);

  return (
    <div className={styles.product}>
      <ProductDetails product={shoe} />
      {/* <h2>reviews component</h2>
      <h2>featured-products component</h2>
      <h3>banner component</h3> */}
    </div>
  );
}
