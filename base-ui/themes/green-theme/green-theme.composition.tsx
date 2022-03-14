import React from 'react';
import { GreenTheme } from './green-theme';
import { greenTheme } from './green-theme-tokens';

export const GreenThemeCCSVars = () => {
  return (
    <GreenTheme>
      <p
        style={{
          color: 'var(--primary-color)',
          backgroundColor: 'var(--bg-color)'
        }}
      >
        Green Theme
      </p>
    </GreenTheme>
  );
};

export const GreenThemeCSSJS = () => {
  return (
    <GreenTheme>
      <p
        style={{
          color: greenTheme.primaryColor,
          backgroundColor: greenTheme.bgColor
        }}
      >
        Green Theme
      </p>
    </GreenTheme>
  );
};
