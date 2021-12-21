import React from 'react';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';
import { ShoesDetails } from './shoes-details';

export const BasicShoesDetails = () => (
  <ShoesDetails catalogShoe={allShoes[0]} />
);
