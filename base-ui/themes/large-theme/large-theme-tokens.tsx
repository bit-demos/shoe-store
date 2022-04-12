import { ThemeSchema } from '@learn-bit-react/base-ui.themes.base-theme';
import { fontSizeTokens } from './design-tokens/font-size-tokens';
import { headingsSizeTokens } from './design-tokens/headings-size-tokens';

const tokens = {};

export const largeTheme: Partial<ThemeSchema> = Object.assign(
  tokens,
  fontSizeTokens,
  headingsSizeTokens
);
