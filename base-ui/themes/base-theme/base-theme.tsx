import React from 'react';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-provider';

export const BaseTheme = ({ children }) => {
  return (
    <ThemeContextProvider data-testid="theme-provider">
      {children}
    </ThemeContextProvider>
  );
};
