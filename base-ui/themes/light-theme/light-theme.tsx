import React from 'react';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-context-provider';
import { lightTheme } from './light-theme-tokens';

export const LightTheme = ({ children }) => {
  return (
    <ThemeContextProvider
      customizedTheme={lightTheme}
      data-testid="theme-provider"
    >
      {children}
    </ThemeContextProvider>
  );
};
