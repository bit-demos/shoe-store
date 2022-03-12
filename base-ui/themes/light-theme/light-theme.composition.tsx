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
        Dark Theme
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
        Dark Theme
      </p>
    </LightTheme>
  );
};

export const LightThemeDefaultFontSize = () => {
  return (
    <LightTheme>
      <p
        style={{
          color: 'var(--text-color)',
          backgroundColor: 'var(--bg-color)',
          fontSize: 'var(--font-size)'
        }}
      >
        Dark Theme
      </p>
    </LightTheme>
  );
};
