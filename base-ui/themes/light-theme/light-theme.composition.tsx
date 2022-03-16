import React from 'react';
import { LightTheme } from './light-theme';
import { lightColorTokens } from './design-tokens/light-color-tokens';
import { DesignTokensViewer } from '@learn-bit-react/base-ui.figma.design-tokens-viewer';

export const LightColors = () => {
  return (
    <LightTheme>
      <DesignTokensViewer tokens={lightColorTokens} />
    </LightTheme>
  );
};
