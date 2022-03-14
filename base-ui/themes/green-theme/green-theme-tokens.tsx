import { ThemeSchema } from '@learn-bit-react/base-ui.themes.theme-provider';
import { bookFont } from '@learn-bit-react/base-ui.styles.fonts.book';

export const greenTheme: Partial<ThemeSchema> = {
  fontFamily: bookFont,
  // primary colors //
  primaryColor: '#52B788',
  primaryHeavy: '#1B4332',
  primaryLight: '#B7E4C7',
  textOnPrimary: '#fff',
  primaryBg: '#D8F3DC',
  primaryBgHeavy: '#1B4332',

  // secondary  colors //
  secondaryColor: '#ffffff',
  secondaryHeavy: '#ffffff',
  secondaryLight: '#ffffff',
  textOnSecondary: '2D6A4F',
  secondaryBg: '#ffffff',
  secondaryBgHeavy: '#ffffff'
};
