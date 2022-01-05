import React from 'react';
import { render } from '@testing-library/react';
import { BasicReviews } from './reviews.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicReviews />);
  const rendered = getByText('This is the review of');
  expect(rendered).toBeTruthy();
});
