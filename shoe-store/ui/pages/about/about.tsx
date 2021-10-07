import React from 'react';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { About as AboutContent } from '@learn-bit-react/ecommerce.content.about';
import styles from './about.module.scss';

export function About() {
  return (
    <Layout>
      <StoreHero
        background="url(https://images.unsplash.com/photo-1548685931-b26a3d28d45d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80)
    no-repeat center center scroll"
        headingText="About our store"
        href="/"
        linkText="Shop Now"
      />

      <AboutContent />
    </Layout>
  );
}
