import { ThemeSchema } from '@learn-bit-react/base-ui.themes.base-theme';
import { primaryColorTokens } from './design-tokens/primary-color-tokens';
import { secondaryColorTokens } from './design-tokens/secondary-color-tokens';

// this is needed as a bug in system prints the first tokens with all other token values.
// adding an empty object first fixes this.
const tokens = {};

export const greenTheme: Partial<ThemeSchema> = Object.assign(
  tokens,
  primaryColorTokens,
  secondaryColorTokens
);
