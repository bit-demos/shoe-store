import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  BasicRating,
  ThreeStarRating,
  SetStarRating
} from './rating.composition';

it('checks the star is rendered', () => {
  render(<BasicRating />);
  const basicSelectSize = screen.getByLabelText('star');
  expect(basicSelectSize).toBeInTheDocument();
});

it('checks 3 stars are rendered', () => {
  render(<ThreeStarRating />);
  const threeStarRating = screen.getAllByLabelText('star').length;
  expect(threeStarRating).toEqual(3);
});

it('checks stars change styles when clicked or on hover', () => {
  render(<SetStarRating />);
  const button = screen.getAllByRole('button')[0];
  expect(button).toHaveClass('off');
  userEvent.click(button);
  expect(button).toHaveClass('on');
  userEvent.click(button);
  userEvent.hover(button);
  expect(button).toHaveClass('on');
});
