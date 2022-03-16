import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrimaryColors, SecondaryColors } from './green-theme.composition';

it('should have style with css var and correct color', () => {
  render(<PrimaryColors />);
  const primaryColors = screen.getByTestId('theme-provider');
  expect(primaryColors).toHaveStyle('--primary-color:#52B788;');
});

it('should have style with css var and with correct color', () => {
  render(<SecondaryColors />);
  const secondaryColors = screen.getByTestId('theme-provider');
  expect(secondaryColors).toHaveStyle('--secondary-color:#ffffff;');
});
