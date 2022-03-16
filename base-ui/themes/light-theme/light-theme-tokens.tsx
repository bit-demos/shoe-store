import { ThemeSchema } from '@learn-bit-react/base-ui.themes.base-theme';
import { lightColorTokens } from './design-tokens/light-color-tokens';

const tokens = {};

export const lightTheme: Partial<ThemeSchema> = Object.assign(
  tokens,
  lightColorTokens
);
