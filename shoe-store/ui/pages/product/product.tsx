import React from 'react';
import { ShoesDetails } from '@learn-bit-react/shoe-store.ui.shoes.shoes-details';
import { useParams } from 'react-router-dom';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';
import { Banner } from '@learn-bit-react/marketing.ui.banner';
import { FeaturedCardGrid } from '@learn-bit-react/marketing.ui.featured-card-grid';
import { mockShoesDataMen } from '@learn-bit-react/shoe-store.entity.shoes';
import { Reviews } from '@learn-bit-react/marketing.ui.reviews';
import styles from './product.module.scss';

function getShoe(shoeId: string) {
  return allShoes.find(({ shoe }) => shoeId === shoe.id) || allShoes[0];
}

export function Product() {
  const { id } = useParams() as { id: string };
  const shoe = getShoe(id);
  const featuredShoes = mockShoesDataMen;

  return (
    <div className={styles.wrapper}>
      <ShoesDetails catalogShoe={shoe} className={styles.details} />
      <Reviews
        rating={shoe.shoe.rating}
        review={shoe.shoe.text}
        className={styles.reviews}
      />
      <FeaturedCardGrid list={featuredShoes} className={styles.featuredCards} />
      <Banner
        className={styles.banner}
        background="url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80) no-repeat center center scroll"
        text="Change the Chemistry"
      />
    </div>
  );
}
