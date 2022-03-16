import React from 'react';
import { DarkTheme } from './dark-theme';
import { darkColorTokens } from './design-tokens/dark-color-tokens';
import { DesignTokensViewer } from '@learn-bit-react/base-ui.figma.design-tokens-viewer';

export const DarkColors = () => {
  return (
    <DarkTheme>
      <DesignTokensViewer tokens={darkColorTokens} />
    </DarkTheme>
  );
};
