import React, { useState, useEffect } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { darkTheme } from '@learn-bit-react/base-ui.themes.dark-theme';
import { lightTheme } from '@learn-bit-react/base-ui.themes.light-theme';
import { useThemeProviderContext } from '@learn-bit-react/base-ui.themes.theme-context-provider';
export type PrintableTheme = {
  theme: any;
  name: string;
};

export function ThemeToggler() {
  const themes: PrintableTheme[] = [
    { theme: lightTheme, name: 'light' },
    { theme: darkTheme, name: 'dark' }
  ];

  const [themeIndex, setThemeIndex] = useState(0);
  const { changeTheme } = useThemeProviderContext();

  useEffect(() => {
    changeTheme(themes[themeIndex].theme);
  }, [themeIndex]);

  const toggleTheme = () => {
    setThemeIndex((themeIndex + 1) % themes.length);
  };

  const nextTheme =
    themes[themeIndex].name === themes[1].name
      ? themes[0].name
      : themes[1].name;

  return (
    <Button onClick={toggleTheme} secondary>
      {`${nextTheme} mode`}
    </Button>
  );
}
