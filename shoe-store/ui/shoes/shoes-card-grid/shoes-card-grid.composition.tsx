import React from 'react';
import { ShoesCardGrid } from './shoes-card-grid';
import { mockShoesHome } from '@learn-bit-react/shoe-store.entity.shoes';

export const BasicShoesCardGrid = () => (
  <ShoesCardGrid list={mockShoesHome()} />
);
