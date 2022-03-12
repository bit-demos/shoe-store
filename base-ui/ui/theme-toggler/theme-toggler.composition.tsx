import React from 'react';
import { ThemeToggler } from './theme-toggler';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-provider';
export const BasicThemeToggler = () => {
  return (
    <ThemeContextProvider>
      <ThemeToggler />
      <p
        style={{
          color: 'var(--text-color)',
          backgroundColor: 'var(--bg-color)',
          margin: '20px, 0'
        }}
      >
        hello
      </p>
    </ThemeContextProvider>
  );
};
