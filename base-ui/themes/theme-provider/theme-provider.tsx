import React, { useContext, createContext, ReactNode } from 'react';
import { createTheme } from '@teambit/base-react.theme.theme-provider';
import { defaultTheme } from './default-theme-tokens';
import { ThemeSchema } from './theme-schema';

export type ThemeContextType = {
  /**
   * function that uses state to set the theme
   */
  changeTheme: (theme: Partial<ThemeSchema>) => void;
  /**
   * current theme value in the theme context
   */
  currentTheme: ThemeSchema;
};

export type ThemeContextProviderProps = {
  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
  /**
   * main theme to be used for example pink theme or purple theme
   */
  mainTheme?: Partial<ThemeSchema>;
  /**
   * classes to be added
   */
  className?: string;
};

// creates a theme context with changeTheme function
export const ThemeContext = createContext<ThemeContextType>({
  changeTheme: () => {},
  currentTheme: null
});

// exports theme context
export const useThemeProviderContext = () => useContext(ThemeContext);

// uses CreateTheme to create a theme from teambits theme provider
const BaseTheme = createTheme({
  theme: defaultTheme
});

// ThemeContextProvider to be used to wrap any component that needs to use the theme context
export function ThemeContextProvider({
  children,
  mainTheme = {},
  className
}: ThemeContextProviderProps) {
    
  function addToBaseTheme(contextTheme: any){
    return {...mainTheme, ...contextTheme}
  }

  // sets the theme starting with the default theme as the current theme
  const [mergeTheme, setTheme] = React.useState(addToBaseTheme(defaultTheme));

  // function to change the theme to the theme that is passed into it
  const changeTheme = (theme) => {
    setTheme(addToBaseTheme(theme));
  };

  // context value of type ThemeContextType with changeTheme function which sets the theme of type changeTheme
  const contextValue: ThemeContextType = { changeTheme: changeTheme, currentTheme: mergeTheme };

  // changeTheme function is passed in as the value to the ThemeContext provider so any component under it can access this context
  // this allows it to then have a theme property which can be used to override the theme
  return (
    <ThemeContext.Provider value={contextValue}>
      <BaseTheme.ThemeProvider overrides={mergeTheme} className={className}>
        {children}
      </BaseTheme.ThemeProvider>
    </ThemeContext.Provider>
  );
}
