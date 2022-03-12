import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  PurpleThemeCCSVars,
  PurpleThemeCSSJS
} from './purple-theme.composition';

it('should have style with css var and correct color', () => {
  render(<PurpleThemeCCSVars />);
  const purpleThemeCCSVars = screen.getByTestId('theme-provider');
  expect(purpleThemeCCSVars).toHaveStyle('--my-color-text:red');
});

it('should have style with css var and with correct color', () => {
  render(<PurpleThemeCSSJS />);
  const purpleThemeCSSJS = screen.getByTestId('theme-provider');
  expect(purpleThemeCSSJS).toHaveStyle('--my-color-text:red');
});
