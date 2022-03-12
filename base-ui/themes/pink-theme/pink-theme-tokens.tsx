import { ThemeSchema } from '@learn-bit-react/base-ui.themes.theme-provider';
import { bookFont } from '@learn-bit-react/base-ui.styles.fonts.book';

export const pinkTheme: ThemeSchema = {
  fontFamily: bookFont,

  //  primary  //
  primaryColor: 'hotpink',
  primaryHeavy: '#f7768d',
  primaryLight: '#ff9aac',
  textOnPrimary: '#ffffff',
  primaryBg: '#ffe5ea',
  primaryBgHeavy: 'hotpink',

  //  secondary  //
  secondaryColor: '#ffffff',
  secondaryHeavy: '#ffffff',
  secondaryLight: '#ffffff',
  textOnSecondary: 'hotpink',
  secondaryBg: '#ffffff',
  secondaryBgHeavy: '#ffffff'
};
