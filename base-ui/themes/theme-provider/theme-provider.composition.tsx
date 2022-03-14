import React from 'react';
import { ThemeContextProvider } from './theme-provider';
import { pinkTheme } from '@learn-bit-react/base-ui.themes.pink-theme';
import { darkTheme } from '@learn-bit-react/base-ui.themes.dark-theme';
import { purpleTheme } from '@learn-bit-react/base-ui.themes.purple-theme';
import { baseTheme } from './base-theme-tokens';
import { greenTheme } from '@learn-bit-react/base-ui.themes.green-theme';

export const ThemeProviderCSSVars = () => {
  return (
    <ThemeContextProvider>
      <p style={{ color: 'var(--primary-color)' }}>Default Theme</p>
    </ThemeContextProvider>
  );
};

export const ThemeProviderCSSJS = () => {
  return (
    <ThemeContextProvider>
      <p style={{ color: baseTheme.primaryColor }}>Default Theme</p>
    </ThemeContextProvider>
  );
};

export const ThemeProviderPinkTheme = () => {
  return (
    <ThemeContextProvider customizedTheme={pinkTheme}>
      <p style={{ color: 'var(--primary-color)' }}>Pink Theme</p>
    </ThemeContextProvider>
  );
};

export const ThemeProviderGreenTheme = () => {
  return (
    <ThemeContextProvider customizedTheme={greenTheme}>
      <p style={{ color: 'var(--primary-color)' }}>Green Theme</p>
    </ThemeContextProvider>
  );
};

export const ThemeProviderDarkTheme = () => {
  return (
    <ThemeContextProvider customizedTheme={darkTheme}>
      <p
        style={{
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-color)'
        }}
      >
        Dark Theme
      </p>
    </ThemeContextProvider>
  );
};
