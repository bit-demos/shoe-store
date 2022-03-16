import { ThemeSchema } from '@learn-bit-react/base-ui.themes.base-theme';
import { primaryColorTokens } from './design-tokens/primary-color-tokens';
import { secondaryColorTokens } from './design-tokens/secondary-color-tokens';

const tokens = {};

export const pinkTheme: Partial<ThemeSchema> = Object.assign(
  tokens,
  primaryColorTokens,
  secondaryColorTokens
);
