import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  BasicShoesCardGrid,
  EmptyShoesCardGrid
} from './shoes-card-grid.composition';

it('checks grid renders 8 cards', () => {
  render(<BasicShoesCardGrid />);
  const cards = screen.getAllByRole('link', { name: /See Product/i });
  expect(cards).toHaveLength(8);
});

it('renders no products when grid is empty', () => {
  render(<EmptyShoesCardGrid />);
  const noProducts = screen.getAllByText('No products to display');
  expect(noProducts).toBeInTheDocument;
});
