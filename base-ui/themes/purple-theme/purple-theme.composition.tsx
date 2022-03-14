import React from 'react';
import { PurpleTheme } from './purple-theme';
import { purpleTheme } from './purple-theme-tokens';

export const PurpleThemeCCSVars = () => {
  return (
    <PurpleTheme>
      <p
        style={{
          color: 'var(--primary-color)',
          backgroundColor: 'var(--bg-color)'
        }}
      >
        Purple Theme
      </p>
    </PurpleTheme>
  );
};

export const PurpleThemeCSSJS = () => {
  return (
    <PurpleTheme>
      <p
        style={{
          color: purpleTheme.primaryColor,
          backgroundColor: purpleTheme.bgColor
        }}
      >
        Purple Theme
      </p>
    </PurpleTheme>
  );
};
