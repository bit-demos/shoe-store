import { ThemeSchema } from './theme-schema';
import { bookFont } from '@learn-bit-react/base-ui.styles.fonts.book';

export const baseTheme: Required<ThemeSchema> = {
  fontFamily: bookFont,
  fontFamilyHeadings: 'Untitled Sans,apple-system,sans-serif',
  fontFamilyBody:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontFamilySerif: 'Georgia, "Times New Roman", serif',
  fontFamilyMono: 'Menlo, Monaco, "Courier New", monospace',

  // heading sizes
  headingXxs: '1rem',
  headingXs: '1.1rem',
  headingSm: '1.25rem',
  headingMd: '1.5rem',
  headingLg: '2rem',
  headingXl: '3rem',
  headingXxl: '4rem',

  // font sizes
  fontXxs: '0.625rem',
  fontXs: '0.7rem',
  fontSm: '0.875rem',
  fontMd: '1rem',
  fontLg: '1.25rem',
  fontXl: '1.5rem',
  fontXxl: '2.25rem',

  // font Weights
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightSemiBold: 500,
  fontWeightBold: 700,

  // border radius
  borderRadiusSmall: '0.125rem',
  borderRadiusMedium: '0.25rem',
  borderRadiusLarge: '0.5rem',
  borderRadiusXLarge: '1rem',
  borderRadiusCircle: '50%',
  borderRadiusPill: '9999px',

  //  primary
  primaryColor: '#6c5ce7',
  primaryHeavy: '#5d4aec',
  primaryLight: '#897dec',
  textOnPrimary: '#ffffff',
  primaryBg: '#c9c3f6',
  primaryBgHeavy: '#3e29df',

  //  secondary
  secondaryColor: '#ffffff',
  secondaryHeavy: '#ffffff',
  secondaryLight: '#ffffff',
  textOnSecondary: '#6c5ce7',
  secondaryBg: '#ffffff',
  secondaryBgHeavy: '#ffffff',

  // text colors
  textColor: '#dbdbdb',
  textBright: '#fff',
  textMuted: '#a9b1ba',

  // background colors
  bgColor: '#fff',
  backgroundBody: '#202b38',
  background: '#161f27',
  backgroundAlt: '#1a242f',

  // form colors
  formPlaceholder: '#a9a9a9',
  formText: '#fff',

  // border
  borderColor: '#fff',
  borderSize1: '1px',
  borderSize2: '2px',
  borderSize3: '3px',
  borderSize4: '4px',

  // Elevation
  boxShadow:
    '0 -1px 1px 0 rgba(0, 0, 0, 0.09), 0 2px 2px 0 rgba(0, 0, 0, 0.23)',
  boxShadowXSmall: '0 1px 0 #0d131e0d',
  boxShadowSmall: '0 1px 2px #0d131e1a',
  boxShadowMedium: '0 2px 4px #0d131e1a',
  boxShadowLarge: '0 2px 8px #0d131e1a',
  boxShadowXLarge: '0 4px 16px #0d131e1a',
  boxShadowOutline: '0 0 0 3px var(color-focus-outline),',

  // outline colors
  colorFocusOutline: '#4299e14c',

  // other colors
  tertiaryColor: '#8367C7',
  complimentaryColor: '#F0FFF1',

  // error colors
  errorColor: '#e62e5c',
  errorHeavy: '#d31948',
  errorLight: '#f086a0',
  errorBg: '#f7bac9',
  errorBgHeavy: '#8d1130',

  // social colors
  twitter: '#1da1f2',
  slack: '#4a154b',
  github: '#24292e'
};
