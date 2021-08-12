import React from 'react';
import { ShoesCardGrid } from './shoes-card-grid';
import { MemoryRouter } from 'react-router';
import { mockShoes } from '@learn-bit-react/shoe-store.entity.shoes';

export const BasicShoesCardGrid = () => (
  <MemoryRouter>
    <ShoesCardGrid list={mockShoes()} />
  </MemoryRouter>
);
