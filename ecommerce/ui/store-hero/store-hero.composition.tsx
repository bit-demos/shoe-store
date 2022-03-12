import React from 'react';
import { StoreHero } from './store-hero';

export const BasicStoreHero = () => (
  <StoreHero
    headingText="store heading"
    linkText="click me"
    href="/"
    background="blue"
  />
);

export const BackgroundImageStoreHero = () => (
  <StoreHero
    headingText="store heading"
    linkText="click me"
    href="/"
    background="no-repeat center/100% url(https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80)"
  />
);
