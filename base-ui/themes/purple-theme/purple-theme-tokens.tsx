import { ThemeSchema } from '@learn-bit-react/base-ui.themes.base-theme';
import { bookFont } from '@learn-bit-react/base-ui.styles.fonts.book';

export const purpleTheme: Partial<ThemeSchema> = {
  fontFamily: bookFont,
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

  tertiaryColor: '#f83d6c',
  complimentaryColor: '#6c707c'
};
