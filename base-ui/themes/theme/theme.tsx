import React from 'react';
import classNames from 'classnames';
import { bookFont } from '@learn-bit-react/base-ui.styles.fonts.book';
import { colors as themeColors } from '@learn-bit-react/base-ui.styles.colors';

export type ThemeProps = {
  /**
   * Override the default light theme
   */
  lightTheme?: string;
  /**
   * Override the default dark theme
   */
  darkTheme?: string;
  /**
   * colors to override the default theme colors
   */
  colors?: string;
  /**
   * fonts to override the default theme fonts
   */
  fonts?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Theme({
  children,
  lightTheme,
  darkTheme,
  colors = themeColors,
  fonts = bookFont
}: ThemeProps) {
  return (
    <div
      className={classNames(
        colors || themeColors,
        fonts || bookFont,
        lightTheme,
        darkTheme
      )}
    >
      {children}
    </div>
  );
}
