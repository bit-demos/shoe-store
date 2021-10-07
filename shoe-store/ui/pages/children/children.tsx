import React from 'react';
import { ShoesCardGrid } from '@learn-bit-react/shoe-store.ui.shoes.shoes-card-grid';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { ImgGrid } from '@learn-bit-react/base-ui.ui.img-grid';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { mockShoesChildren } from '@learn-bit-react/shoe-store.entity.shoes';
import { mockMostWantedShoes } from '@learn-bit-react/shoe-store.entity.most-wanted-shoes';
import styles from './children.module.scss';

export function Children() {
  return (
    <Layout>
      <StoreHero
        className={styles.hero}
        background="no-repeat center/100% url(https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)"
        headingText="Children's Shoes Online"
        href="/shop"
        linkText="Shop Now"
      />
      <ShoesCardGrid className={styles.products} list={mockShoesChildren()} />
    </Layout>
  );
}
