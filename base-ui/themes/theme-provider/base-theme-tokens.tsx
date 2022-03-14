import { ThemeSchema } from './theme-schema';
import { bookFont } from '@learn-bit-react/base-ui.styles.fonts.book';

export const baseTheme: Required<ThemeSchema> = {
  fontFamily: bookFont,

  boxShadow:
    '0 -1px 1px 0 rgba(0, 0, 0, 0.09), 0 2px 2px 0 rgba(0, 0, 0, 0.23)',
  textColor: '#000',
  bgColor: '#fff',
  borderColor: '#fff',

  // heading sizes
  headingXxs: '1rem',
  headingXs: '1.1rem',
  headingSm: '1.25rem',
  headingMd: '1.5rem',
  headingLg: '2rem',
  headingXl: '3rem',
  headingXxl: '4rem',

  //  primary  //
  primaryColor: '#6c5ce7',
  primaryHeavy: '#5d4aec',
  primaryLight: '#897dec',
  textOnPrimary: '#ffffff',
  primaryBg: '#eceaff',
  primaryBgHeavy: '#c9c3f6',

  //  secondary  //
  secondaryColor: '#ffffff',
  secondaryHeavy: '#ffffff',
  secondaryLight: '#ffffff',
  textOnSecondary: '#6c5ce7',
  secondaryBg: '#ffffff',
  secondaryBgHeavy: '#ffffff',

  tertiaryColor: '#8367C7',
  complimentaryColor: '#F0FFF1',

  // social colors
  twitter: '#1da1f2',
  slack: '#4a154b',
  github: '#24292e'
};
