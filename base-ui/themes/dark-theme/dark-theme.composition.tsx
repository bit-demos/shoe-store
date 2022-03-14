import React from 'react';
import { DarkTheme } from './dark-theme';
import { darkTheme } from './dark-theme-tokens';

export const DarkThemeCCSVars = () => {
  return (
    <DarkTheme>
      <p
        style={{
          color: 'var(--text-color)',
          backgroundColor: 'var(--bg-color)'
        }}
      >
        Dark Theme
      </p>
    </DarkTheme>
  );
};

export const DarkThemeCSSJS = () => {
  return (
    <DarkTheme>
      <p
        style={{
          color: darkTheme.textColor,
          backgroundColor: darkTheme.bgColor
        }}
      >
        Dark Theme
      </p>
    </DarkTheme>
  );
};
