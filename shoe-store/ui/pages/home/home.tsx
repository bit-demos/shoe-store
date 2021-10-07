import React from 'react';
import { ShoesCardGrid } from '@learn-bit-react/shoe-store.ui.shoes.shoes-card-grid';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { ImgGrid } from '@learn-bit-react/base-ui.ui.img-grid';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { mockShoesHome } from '@learn-bit-react/shoe-store.entity.shoes';
import { mockMostWantedShoes } from '@learn-bit-react/shoe-store.entity.most-wanted-shoes';
import styles from './home.module.scss';

export function Home() {
  return (
    <Layout>
      <StoreHero
        className={styles.hero}
        background="no-repeat center/100% url(https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80)"
        headingText="Stylish Shoes Online"
        href="/shop"
        linkText="Shop Now"
      />
      <ShoesCardGrid className={styles.products} list={mockShoesHome()} />
      <Heading element="h2" className={styles.heading}>
        Who wouldn't love these
      </Heading>
      <ImgGrid list={mockMostWantedShoes} />
    </Layout>
  );
}
