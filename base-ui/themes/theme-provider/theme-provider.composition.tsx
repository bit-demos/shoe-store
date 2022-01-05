import React from 'react';
import { createTheme } from './create-theme';

const BaseThemeSchema = {
  backgroundColor: 'white',
  textColor: 'navy'
};

const { ThemeProvider } = createTheme<typeof BaseThemeSchema>({
  theme: BaseThemeSchema
});

export const BaseTheme = () => {
  return (
    <ThemeProvider>
      <div
        data-testid="base-theme"
        style={{
          backgroundColor: 'var(--background-color)',
          color: 'var(--text-color)'
        }}
      >
        Base Theme
      </div>
    </ThemeProvider>
  );
};

export const LightTheme = () => {
  return (
    <ThemeProvider overrides={{ textColor: 'black' }}>
      <div
        style={{
          backgroundColor: 'var(--background-color)',
          color: 'var(--text-color)'
        }}
      >
        Light Theme
      </div>
    </ThemeProvider>
  );
};

export const DarkTheme = () => {
  return (
    <ThemeProvider overrides={{ textColor: 'white', backgroundColor: 'black' }}>
      <div
        style={{
          backgroundColor: 'var(--background-color)',
          color: 'var(--text-color)'
        }}
      >
        Dark Theme
      </div>
    </ThemeProvider>
  );
};
