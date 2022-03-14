import React from 'react';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-provider';
import { darkTheme } from './dark-theme-tokens';

export const DarkTheme = ({ children }) => {
  return (
    <ThemeContextProvider
      customizedTheme={darkTheme}
      data-testid="theme-provider"
    >
      {children}
    </ThemeContextProvider>
  );
};
