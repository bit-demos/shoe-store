import React from 'react';
import { render } from '@testing-library/react';
import { BasicRating } from './rating.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicRating />);
  const rendered = getByText('hello from Rating');
  expect(rendered).toBeTruthy();
});
