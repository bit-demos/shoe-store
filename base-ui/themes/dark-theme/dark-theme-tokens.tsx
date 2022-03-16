import { ThemeSchema } from '@learn-bit-react/base-ui.themes.base-theme';
import { darkColorTokens } from './design-tokens/dark-color-tokens';

const tokens = {};

export const darkTheme: Partial<ThemeSchema> = Object.assign(
  tokens,
  darkColorTokens
);
