import React from 'react';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-provider';
import { baseTheme } from './base-theme-tokens';

export const BaseTheme = ({ children }) => {
  return (
    <ThemeContextProvider data-testid="theme-provider">
      <div className={baseTheme.fontFamily}>{children}</div>
    </ThemeContextProvider>
  );
};
