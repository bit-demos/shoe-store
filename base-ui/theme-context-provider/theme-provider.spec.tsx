import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  ThemeProviderCSSVars,
  ThemeProviderCSSJS
} from './theme-provider.composition';

it('should have style with css var and correct color', () => {
  render(<ThemeProviderCSSVars />);
  const themeProviderCSSVars = screen.getByTestId('theme-provider');
  expect(themeProviderCSSVars).toHaveStyle('--primary-color: #6c5ce7');
});

it('should have style with css var and correct color', () => {
  render(<ThemeProviderCSSJS />);
  const themeProviderCSSJS = screen.getByTestId('theme-provider');
  expect(themeProviderCSSJS).toHaveStyle('--primary-color: #6c5ce7');
});
