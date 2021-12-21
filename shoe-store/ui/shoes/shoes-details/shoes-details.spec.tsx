import React from 'react';
import { render } from '@testing-library/react';
import { BasicShoesDetails } from './shoes-details.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicShoesDetails />);
  const rendered = getByText('hello from ShoesDetails');
  expect(rendered).toBeTruthy();
});
