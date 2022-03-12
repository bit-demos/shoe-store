import React from 'react';
import { Theme } from '@learn-bit-react/base-ui.themes.theme-provider';
import { darkTheme } from './dark-theme-tokens';

export const DarkTheme = ({ children }) => {
  return (
    <Theme.ThemeProvider overrides={darkTheme}>{children}</Theme.ThemeProvider>
  );
};
