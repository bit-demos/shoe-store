import React from 'react';
import { Theme } from '@learn-bit-react/base-ui.themes.theme-provider';
import { pinkTheme } from './pink-theme-tokens';

export const PinkTheme = ({ children }) => {
  return (
    <Theme.ThemeProvider overrides={pinkTheme} data-testid="theme-provider">
      {children}
    </Theme.ThemeProvider>
  );
};
