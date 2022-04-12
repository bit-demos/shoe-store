import React from 'react';
import { ThemeToggler } from './theme-toggler';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-context-provider';
import { baseTheme } from '@learn-bit-react/base-ui.themes.base-theme';
import { largeTheme } from '@learn-bit-react/base-ui.themes.large-theme';
import { pinkTheme } from '@learn-bit-react/base-ui.themes.pink-theme';
import { purpleTheme } from '@learn-bit-react/base-ui.themes.purple-theme';
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

export const BasicThemeToggler2 = () => {
  return (
    <ThemeContextProvider>
      <ThemeToggler type="toggle" />
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

export const BasicThemeToggler3 = () => {
  return (
    <ThemeContextProvider>
      <ThemeToggler
        type="toggle"
        toggleThemes={[
          { theme: baseTheme, name: 'base' },
          { theme: largeTheme, name: 'large' }
        ]}
      />
      <p
        style={{
          color: 'var(--text-color)',
          fontSize: 'var(--font-sm)',
          margin: '20px, 0'
        }}
      >
        hello
      </p>
      <p
        style={{
          color: 'var(--text-color)',
          fontSize: 'var(--font-lg)'
        }}
      >
        hello
      </p>
    </ThemeContextProvider>
  );
};

export const BasicThemeToggler4 = () => {
  return (
    <ThemeContextProvider>
      <ThemeToggler
        type="button"
        toggleThemes={[
          { theme: pinkTheme, name: 'pink' },
          { theme: purpleTheme, name: 'purple' }
        ]}
      />
      <p
        style={{
          color: 'var(--primary-color)',
          fontSize: 'var(--font-sm)',
          margin: '20px, 0'
        }}
      >
        hello
      </p>
    </ThemeContextProvider>
  );
};
