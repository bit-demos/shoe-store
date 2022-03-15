import React from 'react';
import { LightTheme } from './light-theme';
import { lightTheme } from './light-theme-tokens';

export const LightThemeCCSVars = () => {
  return (
    <LightTheme>
      <p
        style={{
          color: 'var(--text-color)',
          backgroundColor: 'var(--bg-color)'
        }}
      >
        Light Theme
      </p>
    </LightTheme>
  );
};

export const LightThemeCSSJS = () => {
  return (
    <LightTheme>
      <p
        style={{
          color: lightTheme.textColor,
          backgroundColor: lightTheme.bgColor
        }}
      >
        Light Theme
      </p>
    </LightTheme>
  );
};
