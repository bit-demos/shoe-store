import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicFeaturedCardGrid } from './featured-card-grid.composition';

it('checks grid has a heading and renders 3 cards', () => {
  render(<BasicFeaturedCardGrid />);
  const heading = screen.getByRole('heading', { name: /Featured Products/i });
  expect(heading).toBeInTheDocument();
  const cards = screen.getAllByRole('link', { name: /See Product/i });
  expect(cards).toHaveLength(3);
});
