import React from 'react';
import { render, screen } from '@testing-library/react';
import { PinkThemeCCSVars, PinkThemeCSSJS } from './pink-theme.composition';

it('should have style with css var and correct color', () => {
  render(<PinkThemeCCSVars />);
  const pinkThemeCCSVars = screen.getByTestId('theme-provider');
  expect(pinkThemeCCSVars).toHaveStyle('--my-color-text:red');
});

it('should have style with css var and with correct color', () => {
  render(<PinkThemeCSSJS />);
  const pinkThemeCSSJS = screen.getByTestId('theme-provider');
  expect(pinkThemeCSSJS).toHaveStyle('--my-color-text:red');
});