import React from 'react';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-provider';
import { pinkTheme } from './pink-theme-tokens';

export const PinkTheme = ({ children }) => {
  return (
    <ThemeContextProvider
      customizedTheme={pinkTheme}
      data-testid="theme-provider"
    >
      {children}
    </ThemeContextProvider>
  );
};
