import React from 'react';
import { ShoesCardGrid } from '@learn-bit-react/shoe-store.ui.shoes.shoes-card-grid';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { ImgGrid } from '@learn-bit-react/base-ui.ui.img-grid';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { mockShoesMen } from '@learn-bit-react/shoe-store.entity.shoes';
import { mockMostWantedShoes } from '@learn-bit-react/shoe-store.entity.most-wanted-shoes';
import styles from './men.module.scss';

export function Men() {
  return (
    <Layout>
      <StoreHero
        className={styles.hero}
        background="no-repeat center/100%  url(https://images.unsplash.com/photo-1553460588-3ba256b9aac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)"
        headingText="Men's Shoes Online"
        href="/shop"
        linkText="Shop Now"
      />
      <ShoesCardGrid className={styles.products} list={mockShoesMen()} />
    </Layout>
  );
}
