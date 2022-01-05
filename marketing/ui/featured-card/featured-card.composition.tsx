import React from 'react';
import { FeaturedCard } from './featured-card';

export const BasicFeaturedCard = () => (
  <FeaturedCard
    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
    alt="image description"
    title="Product name"
    price={190}
    id="m-1"
  />
);
