import React from 'react';
import { mockProductList } from '@learn-bit-react/ecommerce.entity.product';
import { FeaturedCardGrid } from './featured-card-grid';

export const BasicFeaturedCardGrid = () => (
  <FeaturedCardGrid list={mockProductList} />
);
