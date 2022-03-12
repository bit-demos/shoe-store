import React from 'react';
import { Theme } from './theme-provider';
import { pinkTheme } from '@learn-bit-react/base-ui.themes.pink-theme';
import { darkTheme } from '@learn-bit-react/base-ui.themes.dark-theme';
import { defaultTheme } from './default-theme-tokens';

export const ThemeProviderCSSVars = () => {
  return (
    <Theme.ThemeProvider data-testid="theme-provider">
      <p style={{ color: 'var(--primary-color)' }}>Default Theme</p>
    </Theme.ThemeProvider>
  );
};

export const ThemeProviderCSSJS = () => {
  return (
    <Theme.ThemeProvider data-testid="theme-provider">
      <p style={{ color: defaultTheme.primaryColor }}>Default Theme</p>
    </Theme.ThemeProvider>
  );
};

export const ThemeProviderDarkTheme = () => {
  return (
    <Theme.ThemeProvider overrides={darkTheme} data-testid="theme-provider">
      <p
        style={{
          backgroundColor: 'var(--bg-color)',
          color: 'var(--primary-color)'
        }}
      >
        Dark Theme
      </p>
    </Theme.ThemeProvider>
  );
};

export const ThemeProviderPinkTheme = () => {
  return (
    <Theme.ThemeProvider overrides={pinkTheme} data-testid="theme-provider">
      <p style={{ color: 'var(--primary-color)' }}>Pink Theme</p>
    </Theme.ThemeProvider>
  );
};
