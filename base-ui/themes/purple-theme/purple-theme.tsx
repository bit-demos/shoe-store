import React from 'react';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-provider';
import { purpleTheme } from './purple-theme-tokens';

export const PurpleTheme = ({ children }) => {
  return (
    <ThemeContextProvider
      customizedTheme={purpleTheme}
      data-testid="theme-provider"
    >
      {children}
    </ThemeContextProvider>
  );
};
