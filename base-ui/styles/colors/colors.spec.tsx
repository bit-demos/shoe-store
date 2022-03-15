import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryColors } from './colors.composition';

it('renders the primary color', () => {
  const { getByTestId } = render(<PrimaryColors />);
  const primary = getByTestId('--primary-color');
  expect(primary).toBeTruthy();
});
