import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrimaryColors, SecondaryColors } from './purple-theme.composition';

it('should have style with css var and correct color', () => {
  render(<PrimaryColors />);
  const primaryColors = screen.getByTestId('theme-provider');
  expect(primaryColors).toHaveStyle('--primary-color:#6c5ce7');
});

it('should have style with css var and with correct color', () => {
  render(<SecondaryColors />);
  const secondaryColors = screen.getByTestId('theme-provider');
  expect(secondaryColors).toHaveStyle('--primary-color:#6c5ce7');
});
