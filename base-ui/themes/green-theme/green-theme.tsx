import React from 'react';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-context-provider';
import { greenTheme } from './green-theme-tokens';

export const GreenTheme = ({ children }) => {
  return (
    <ThemeContextProvider
      customizedTheme={greenTheme}
      data-testid="theme-provider"
    >
      {children}
    </ThemeContextProvider>
  );
};
