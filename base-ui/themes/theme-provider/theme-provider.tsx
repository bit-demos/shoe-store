import React, { useContext, createContext, ReactNode } from 'react';
import { createTheme } from '@teambit/base-react.theme.theme-provider';
import { defaultTheme } from './default-theme-tokens';
import { ThemeSchema } from './theme-schema';

export type ThemeContextType = {
  /**
   * function that uses state to set the theme
   */
<<<<<<< Updated upstream
  changeTheme: (theme: ThemeSchema) => void;
=======
  changeTheme: (theme: Partial<ThemeSchema>) => void;
  /**
   * current theme in the theme context
   */
  currentTheme: Partial<ThemeSchema>;
>>>>>>> Stashed changes
};

export type ThemeContextProviderProps = {
  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
};

// creates a theme context with changeTheme function
export const ThemeContext = createContext<ThemeContextType>({
<<<<<<< Updated upstream
  changeTheme: () => {}
=======
  changeTheme: () => {},
  currentTheme: {}
>>>>>>> Stashed changes
});

// exports theme context
export const useThemeContext = () => useContext(ThemeContext);

// uses CreateTheme to create a theme from teambits theme provider
export const Theme = createTheme({
  theme: defaultTheme
});

// ThemeContextProvider to be used to wrap any component that needs to use the theme context
export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  // sets the theme starting with the default theme as the current theme
  const [theme, setTheme] = React.useState(defaultTheme);

  // function to change the theme to the theme that is passed into it
  const changeTheme = (theme) => {
    setTheme(theme);
  };

  // context value of type ThemeContextType with changeTheme function which sets the theme of type changeTheme
  const contextValue: ThemeContextType = { changeTheme: changeTheme };

  // changeTheme function is passed in as the value to the ThemeContext provider so any component under it can access this context
  // this allows it to then have a theme property which can be used to override the theme
  return (
    <ThemeContext.Provider value={contextValue}>
      <Theme.ThemeProvider overrides={theme}>{children}</Theme.ThemeProvider>
    </ThemeContext.Provider>
  );
}
