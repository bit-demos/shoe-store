import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicReviews } from './reviews.composition';

it('checks reviews has a heading', () => {
  render(<BasicReviews />);
  const heading = screen.getByRole('heading', { name: /Reviews/i });
  expect(heading).toBeInTheDocument();
  const stars = screen.getAllByLabelText('star')[0];
  expect(stars).toBeInTheDocument();
  const text = screen.getByText('This is the review of');
  expect(text).toBeInTheDocument();
});
