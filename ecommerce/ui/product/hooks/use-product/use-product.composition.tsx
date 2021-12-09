import React, { useContext, useEffect, useState } from 'react';
import { useProduct } from './use-product';
import { ProductCardGrid } from '@learn-bit-react/ecommerce.ui.product.product-card-grid';

export const BasicUseProduct = () => {
  const [getProducts, products, isLoading] = useProduct();
  useEffect(() => getProducts(), []);

  if (isLoading) {
    return <div>loading....</div>;
  }
  if (!products) return <div>no Products found</div>;

  return <ProductCardGrid list={products} />;
};
