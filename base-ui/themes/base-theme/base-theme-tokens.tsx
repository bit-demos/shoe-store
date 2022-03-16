import { ThemeSchema } from './theme-schema';
import { headingsSizeTokens } from './design-tokens/headings-size-tokens';
import { fontFamilyTokens } from './design-tokens/font-family-tokens';
import { fontWeightTokens } from './design-tokens/font-weight-tokens';
import { fontSizeTokens } from './design-tokens/font-size-tokens';
import { primaryColorTokens } from './design-tokens/primary-color-tokens';
import { secondaryColorTokens } from './design-tokens/secondary-color-tokens';
import { errorColorTokens } from './design-tokens/error-color-tokens';
import { textColorTokens } from './design-tokens/text-color-tokens';
import { borderRadiusTokens } from './design-tokens/border-radius-tokens';
import { borderSizeTokens } from './design-tokens/border-size-tokens';
import { backgroundColorTokens } from './design-tokens/background-color-tokens';
import { boxShadowTokens } from './design-tokens/box-shadow-tokens';
import { generalColorTokens } from './design-tokens/general-color-tokens';
import { bookFont } from '@learn-bit-react/base-ui.styles.fonts.book';

// this is needed as a bug in system prints the first tokens with all other token values.
// adding an empty object first fixes this.
const tokens = { fontFamily: bookFont };

export const baseTheme: Partial<ThemeSchema> = Object.assign(
  tokens,
  fontFamilyTokens,
  fontSizeTokens,
  fontWeightTokens,
  primaryColorTokens,
  secondaryColorTokens,
  errorColorTokens,
  borderRadiusTokens,
  borderSizeTokens,
  textColorTokens,
  backgroundColorTokens,
  boxShadowTokens,
  generalColorTokens,
  headingsSizeTokens
);
