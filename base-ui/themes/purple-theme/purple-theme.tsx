import React from 'react';
import { Theme } from '@learn-bit-react/base-ui.themes.theme-provider';
import { purpleTheme } from './purple-theme-tokens';

export const PurpleTheme = ({ children }) => {
  return (
    <Theme.ThemeProvider overrides={purpleTheme}>
      {children}
    </Theme.ThemeProvider>
  );
};
