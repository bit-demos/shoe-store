import React from 'react';
import { PinkTheme } from './pink-theme';
import { pinkTheme } from './pink-theme-tokens';

export const PinkThemeCCSVars = () => {
  return (
    <PinkTheme>
      <p
        style={{
          color: 'var(--primary-color)',
          backgroundColor: 'var(--bg-color)'
        }}
      >
        Pink Theme
      </p>
    </PinkTheme>
  );
};

export const PinkThemeCSSJS = () => {
  return (
    <PinkTheme>
      <p
        style={{
          color: pinkTheme.primaryColor,
          backgroundColor: pinkTheme.bgColor
        }}
      >
        Pink Theme
      </p>
    </PinkTheme>
  );
};

export const PinkThemeDefaultFontSize = () => {
  return (
    <PinkTheme>
      <p
        style={{
          color: 'var(--primary-color)',
          backgroundColor: 'var(--bg-color)',
          fontSize: 'var(--font-size)'
        }}
      >
        Pink Theme
      </p>
    </PinkTheme>
  );
};
