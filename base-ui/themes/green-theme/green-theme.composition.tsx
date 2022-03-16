import React from 'react';
import { GreenTheme } from './green-theme';
import { primaryColorTokens } from './design-tokens/primary-color-tokens';
import { secondaryColorTokens } from './design-tokens/secondary-color-tokens';
import { DesignTokensViewer } from '@learn-bit-react/base-ui.figma.design-tokens-viewer';

export const PrimaryColors = () => {
  return (
    <GreenTheme>
      <DesignTokensViewer tokens={primaryColorTokens} />
    </GreenTheme>
  );
};

export const SecondaryColors = () => {
  return (
    <GreenTheme>
      <DesignTokensViewer tokens={secondaryColorTokens} />
    </GreenTheme>
  );
};
