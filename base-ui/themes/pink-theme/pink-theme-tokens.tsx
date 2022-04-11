import { ThemeSchema } from '@learn-bit-react/base-ui.themes.base-theme';
import { primaryColorTokens } from './design-tokens/primary-color-tokens';
import { secondaryColorTokens } from './design-tokens/secondary-color-tokens';
import { bookFont } from '@learn-bit-react/base-ui.styles.fonts.book';

const tokens = { fontFamily: bookFont };

export const pinkTheme: Partial<ThemeSchema> = Object.assign(
  tokens,
  primaryColorTokens,
  secondaryColorTokens
);
