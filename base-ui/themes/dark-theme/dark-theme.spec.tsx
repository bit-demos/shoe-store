import React from 'react';
import { render, screen } from '@testing-library/react';
import { DarkThemeCCSVars, DarkThemeCSSJS } from './dark-theme.composition';

it('should have style with css var and correct color', () => {
  render(<DarkThemeCCSVars />);
  const darkThemeCCSVars = screen.getByTestId('theme-provider');
  expect(darkThemeCCSVars).toHaveStyle('--my-color-text:red');
});

it('should have style with css var and with correct color', () => {
  render(<DarkThemeCSSJS />);
  const darkThemeCSSJS = screen.getByTestId('theme-provider');
  expect(darkThemeCSSJS).toHaveStyle('--my-color-text:red');
});
