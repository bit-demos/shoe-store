import React from 'react';
import { ShoesCardGrid } from '@learn-bit-react/shoe-store.ui.shoes.shoes-card-grid';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { ImgGrid } from '@learn-bit-react/base-ui.ui.img-grid';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { mockShoes } from '@learn-bit-react/shoe-store.entity.shoes';
import { mockMostWantedShoes } from '@learn-bit-react/shoe-store.entity.most-wanted-shoes';

import styles from './home-shoes.module.scss';

export function HomeShoes() {
  return (
    <Layout>
      <StoreHero
        className={styles.hero}
        background="url(https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80)
    no-repeat center center scroll"
        headingText="Stylish Shoes Online"
        href="/shop"
        linkText="Shop Now"
      />
      <ShoesCardGrid className={styles.products} list={mockShoes()} />
      <Heading element="h2" className={styles.heading}>
        Who wouldn't love these
      </Heading>
      <ImgGrid list={mockMostWantedShoes} />
    </Layout>
  );
}
