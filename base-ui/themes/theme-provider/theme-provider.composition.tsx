import React from 'react';
import { ThemeContextProvider } from './theme-provider';
import { pinkTheme } from '@learn-bit-react/base-ui.themes.pink-theme';
import { darkTheme } from '@learn-bit-react/base-ui.themes.dark-theme';
import { baseTheme } from './base-theme-tokens';

export const ThemeProviderCSSVars = () => {
  return (
    <ThemeContextProvider data-testid="theme-provider">
      <p style={{ color: 'var(--primary-color)' }}>Default Theme</p>
    </ThemeContextProvider>
  );
};

export const ThemeProviderCSSJS = () => {
  return (
    <ThemeContextProvider data-testid="theme-provider">
      <p style={{ color: baseTheme.primaryColor }}>Default Theme</p>
    </ThemeContextProvider>
  );
};

export const ThemeProviderDarkTheme = () => {
  return (
    <ThemeContextProvider
      customizedTheme={darkTheme}
      data-testid="theme-provider"
    >
      <p
        style={{
          backgroundColor: 'var(--bg-color)',
          color: 'var(--primary-color)'
        }}
      >
        Dark Theme
      </p>
    </ThemeContextProvider>
  );
};

export const ThemeProviderPinkTheme = () => {
  return (
    <ThemeContextProvider
      customizedTheme={pinkTheme}
      data-testid="theme-provider"
    >
      <p style={{ color: 'var(--primary-color)' }}>Pink Theme</p>
    </ThemeContextProvider>
  );
};
