import React from 'react';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-context-provider';
import { largeTheme } from './large-theme-tokens';

export const LargeTheme = ({ children }) => {
  return (
    <ThemeContextProvider
      customizedTheme={largeTheme}
      data-testid="theme-provider"
    >
      {children}
    </ThemeContextProvider>
  );
};
