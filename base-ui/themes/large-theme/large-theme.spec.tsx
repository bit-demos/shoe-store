import React from 'react';
import { render, screen } from '@testing-library/react';
import { FontSizes, HeadingSizes } from './large-theme.composition';

it.skip('should have style with css var and correct color', () => {
  render(<FontSizes />);
  const fontSizes = screen.getByTestId('theme-provider');
  expect(fontSizes).toHaveStyle('--primary-color:#52B788;');
});

it.skip('should have style with css var and with correct color', () => {
  render(<HeadingSizes />);
  const headingSizes = screen.getByTestId('theme-provider');
  expect(headingSizes).toHaveStyle('--secondary-color:#ffffff;');
});
