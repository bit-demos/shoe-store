import React from 'react';
import { mockShoesHome } from '@learn-bit-react/shoe-store.entity.shoes';
import { ShoesCardGrid } from './shoes-card-grid';

export const BasicShoesCardGrid = () => (
  <ShoesCardGrid list={mockShoesHome()} />
);

export const EmptyShoesCardGrid = () => <ShoesCardGrid list={[]} />;
