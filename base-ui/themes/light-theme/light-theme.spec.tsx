import React from 'react';
import { render, screen } from '@testing-library/react';
import { LightThemeCCSVars, LightThemeCSSJS } from './light-theme.composition';

it('should have style with css var and correct color', () => {
  render(<LightThemeCCSVars />);
  const lightThemeCCSVars = screen.getByTestId('theme-provider');
  expect(lightThemeCCSVars).toHaveStyle('--my-color-text:red');
});

it('should have style with css var and with correct color', () => {
  render(<LightThemeCSSJS />);
  const lightThemeCSSJS = screen.getByTestId('theme-provider');
  expect(lightThemeCSSJS).toHaveStyle('--my-color-text:red');
});
