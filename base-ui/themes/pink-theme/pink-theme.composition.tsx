import React from 'react';
import { PinkTheme } from './pink-theme';
import { primaryColorTokens } from './design-tokens/primary-color-tokens';
import { secondaryColorTokens } from './design-tokens/secondary-color-tokens';
import { DesignTokensViewer } from '@learn-bit-react/base-ui.figma.design-tokens-viewer';

export const PrimaryColors = () => {
  return (
    <PinkTheme>
      <DesignTokensViewer tokens={primaryColorTokens} />
    </PinkTheme>
  );
};

export const SecondaryColors = () => {
  return (
    <PinkTheme>
      <DesignTokensViewer tokens={secondaryColorTokens} />
    </PinkTheme>
  );
};
