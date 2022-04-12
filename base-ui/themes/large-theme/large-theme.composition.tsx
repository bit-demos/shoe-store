import React from 'react';
import { LargeTheme } from './large-theme';
import { headingsSizeTokens } from './design-tokens/headings-size-tokens';
import { fontSizeTokens } from './design-tokens/font-size-tokens';
import { DesignTokensViewer } from '@learn-bit-react/base-ui.figma.design-tokens-viewer';

export const FontSizes = () => {
  return (
    <LargeTheme>
      <DesignTokensViewer tokens={fontSizeTokens} />
    </LargeTheme>
  );
};

export const HeadingSizes = () => {
  return (
    <LargeTheme>
      <DesignTokensViewer tokens={headingsSizeTokens} />
    </LargeTheme>
  );
};
