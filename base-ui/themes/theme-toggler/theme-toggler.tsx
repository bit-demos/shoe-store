import React, { useState, useEffect } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { darkTheme } from '@learn-bit-react/base-ui.themes.dark-theme';
import { lightTheme } from '@learn-bit-react/base-ui.themes.light-theme';
import { useThemeProviderContext } from '@learn-bit-react/base-ui.themes.theme-context-provider';
import { Toggle } from '@teambit/design.ui.input.toggle';

export type ThemeTogglerProps = {
  type?: 'button' | 'toggle';
  toggleThemes?: PrintableTheme[];
};

export type PrintableTheme = {
  theme: any;
  name: string;
};

export function ThemeToggler({
  type = 'button',
  toggleThemes = [
    { theme: lightTheme, name: 'light' },
    { theme: darkTheme, name: 'dark' }
  ]
}: ThemeTogglerProps) {
  const themes: PrintableTheme[] = toggleThemes;

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
  if (type === 'toggle') {
    return <Toggle onChange={toggleTheme}></Toggle>;
  } else {
    return (
      <Button onClick={toggleTheme} secondary>
        {`${nextTheme} mode`}
      </Button>
    );
  }
}
