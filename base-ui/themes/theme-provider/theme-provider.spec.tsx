import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  ThemeProviderCSSVars,
  ThemeProviderCSSJS
} from './theme-provider.composition';

it.skip('should have style with css var and correct color', () => {
  render(<ThemeProviderCSSVars />);
  const themeProviderCSSVars = screen.getByTestId('theme-provider');
  expect(themeProviderCSSVars).toHaveStyle('--twitter:#1da1f2');
});

it.skip('should have style with css var and correct color', () => {
  render(<ThemeProviderCSSJS />);
  const themeProviderCSSJS = screen.getByTestId('theme-provider');
  expect(themeProviderCSSJS).toHaveStyle('--twitter:#1da1f2');
});
