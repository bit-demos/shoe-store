import React, { useState, useEffect } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { darkTheme } from '@learn-bit-react/base-ui.themes.dark-theme';
import { lightTheme } from '@learn-bit-react/base-ui.themes.light-theme';
import { useThemeContext } from '@learn-bit-react/base-ui.themes.theme-provider';
export type PrintableTheme = {
  theme: any;
  name: string;
};
export function ThemeToggler() {
  const themes: PrintableTheme[] = [
    { theme: darkTheme, name: 'dark' },
    { theme: lightTheme, name: 'light' }
  ];

  const [theme, setTheme] = useState(themes[0]);
  const themeContext = useThemeContext();

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? themes[0] : themes[1]);
    themeContext.changeTheme(theme.theme);
  };

  return (
    <Button onClick={toggleTheme} secondary>
      {`${theme.name} mode`}
    </Button>
  );
}
