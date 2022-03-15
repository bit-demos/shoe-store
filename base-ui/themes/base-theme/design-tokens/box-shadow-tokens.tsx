import { ThemeSchema } from '../theme-schema';

export const boxShadowTokens: Partial<ThemeSchema> = {
  boxShadow:
    '0 -1px 1px 0 rgba(0, 0, 0, 0.09), 0 2px 2px 0 rgba(0, 0, 0, 0.23)',
  boxShadowXSmall: '0 1px 0 #0d131e0d',
  boxShadowSmall: '0 1px 2px #0d131e1a',
  boxShadowMedium: '0 2px 4px #0d131e1a',
  boxShadowLarge: '0 2px 8px #0d131e1a',
  boxShadowXLarge: '0 4px 16px #0d131e1a',
  boxShadowOutline: '0 0 0 3px var(color-focus-outline),'
};
