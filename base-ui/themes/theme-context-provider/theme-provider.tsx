import React, { useContext, createContext, ReactNode } from 'react';
import { createTheme } from '@teambit/base-react.theme.theme-provider';
import { baseTheme } from '@learn-bit-react/base-ui.themes.base-theme';
import { ThemeSchema } from './theme-schema';

export type ThemeContextType = {
  /**
   * function that uses state to set the theme
   */

  changeTheme: (theme: Partial<ThemeSchema>) => void;
  /**
   * current theme in the theme context
   */
  currentTheme: Partial<ThemeSchema>;
};

export type ThemeContextProviderProps = {
  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
  /**
   * customized theme that is merged with base theme for example pink theme
   * any values that are the same are overridden by the customized theme
   */
  customizedTheme?: Partial<ThemeSchema>;
  /**
   * classes to be added
   */
  className?: string;
};

// creates a theme context with changeTheme function
export const ThemeContext = createContext<ThemeContextType>({
  changeTheme: () => {},
  currentTheme: {}
});

// exports theme context
export const useThemeProviderContext = () => useContext(ThemeContext);

// uses CreateTheme to create a theme from teambit's theme provider
const BaseTheme = createTheme({
  theme: baseTheme
});

// Wrap any component to use the theme context
export function ThemeContextProvider({
  children,
  customizedTheme = {},
  className
}: ThemeContextProviderProps) {
  function addToBaseTheme(contextTheme: any) {
    return { ...contextTheme, ...customizedTheme };
  }

  // sets the theme starting with the base theme as the default theme
  const [customTheme, setCustomTheme] = React.useState(
    addToBaseTheme(baseTheme)
  );

  // changes the theme adding the new theme to the base theme
  const changeTheme = (theme) => {
    setCustomTheme(addToBaseTheme(theme));
  };

  // context value of type ThemeContextType with changeTheme function which sets the theme of type changeTheme
  const contextValue: ThemeContextType = {
    changeTheme: changeTheme,
    currentTheme: customTheme
  };

  // changeTheme function is passed in as the value to the ThemeContext provider so any component under it can access this context
  // this allows it to then have a theme property which can be used to override the theme
  return (
    <ThemeContext.Provider value={contextValue}>
      <BaseTheme.ThemeProvider
        overrides={customTheme}
        className={className}
        data-testid="theme-provider"
      >
        <div className={customTheme.fontFamily}>{children}</div>
      </BaseTheme.ThemeProvider>
    </ThemeContext.Provider>
  );
}
