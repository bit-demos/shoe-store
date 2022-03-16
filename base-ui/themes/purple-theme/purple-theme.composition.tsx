import React from 'react';
import { PurpleTheme } from './purple-theme';
import { primaryColorTokens } from './design-tokens/primary-color-tokens';
import { secondaryColorTokens } from './design-tokens/secondary-color-tokens';
import { DesignTokensViewer } from '@learn-bit-react/base-ui.figma.design-tokens-viewer';

export const PrimaryColors = () => {
  return (
    <PurpleTheme>
      <DesignTokensViewer tokens={primaryColorTokens} />
    </PurpleTheme>
  );
};

export const SecondaryColors = () => {
  return (
    <PurpleTheme>
      <DesignTokensViewer tokens={secondaryColorTokens} />
    </PurpleTheme>
  );
};
