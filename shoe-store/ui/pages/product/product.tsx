import React from 'react';
import { ProductDetails } from '@learn-bit-react/shoe-store.ui.product.product-details';
import { useParams } from 'react-router-dom';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';
import styles from './product.module.scss';

export type ProductProps = {
  /**
   * id of the product
   */
  id: string;
  /**
   * name of the product
   */
  name: string;
  /**
   * src for image
   */
  src: string;
  /**
   * alt for image
   */
  alt: string;
  /**
   * description of the product
   */
  description: string;
  /**
   * colors for product
   */
  colors: Array<string>;
  /**
   * price of the product
   */
  price: number;
  /**
   * product rating
   */
  rating: number;
  /**
   * product sizes
   */
  sizes: Array<number>;
};

export function getShoe(shoeId) {
  return allShoes.find(({ id }) => shoeId === id);
}

export function Product({}: ProductProps) {
  const { id } = useParams();
  const shoe = getShoe(id);

  return (
    <div className={styles.product}>
      <ProductDetails
        id={shoe.id}
        name={shoe.title}
        description={shoe.text}
        alt={shoe.alt}
        src={shoe.src}
        price={shoe.price}
        sizes={shoe.size}
        rating={4}
        colors={shoe.availableColors}
      />
      <h2>reviews component</h2>
      <h2>featured-products component</h2>
      <h3>banner component</h3>
    </div>
  );
}
