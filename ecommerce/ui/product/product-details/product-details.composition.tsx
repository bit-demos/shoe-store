import React from 'react';
import { mockProductFromApi } from '@learn-bit-react/ecommerce.entity.product';
import { ProductDetails } from './product-details';

export const BasicProductDetails = () => (
  <ProductDetails catalogProduct={mockProductFromApi[0]} />
);
