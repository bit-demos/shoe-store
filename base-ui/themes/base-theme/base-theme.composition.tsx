import React from 'react';
import { BaseTheme } from './base-theme';
import { headingsSizeTokens } from './design-tokens/headings-size-tokens';
import { fontFamilyTokens } from './design-tokens/font-family-tokens';
import { fontWeightTokens } from './design-tokens/font-weight-tokens';
import { fontSizeTokens } from './design-tokens/font-size-tokens';
import { primaryColorTokens } from './design-tokens/primary-color-tokens';
import { secondaryColorTokens } from './design-tokens/secondary-color-tokens';
import { errorColorTokens } from './design-tokens/error-color-tokens';
import { borderRadiusTokens } from './design-tokens/border-radius-tokens';
import { borderSizeTokens } from './design-tokens/border-size-tokens';
import { textColorTokens } from './design-tokens/text-color-tokens';
import { backgroundColorTokens } from './design-tokens/background-color-tokens';
import { boxShadowTokens } from './design-tokens/box-shadow-tokens';
import { generalColorTokens } from './design-tokens/general-color-tokens';
import { DesignTokensViewer } from '@learn-bit-react/base-ui.figma.design-tokens-viewer';

export const PrimaryColors = () => {
  return <DesignTokensViewer tokens={primaryColorTokens} />;
};

export const SecondaryColors = () => {
  return <DesignTokensViewer tokens={secondaryColorTokens} />;
};

export const errorColors = () => {
  return <DesignTokensViewer tokens={errorColorTokens} />;
};
export const textColors = () => {
  return <DesignTokensViewer tokens={textColorTokens} />;
};
export const generalColors = () => {
  return <DesignTokensViewer tokens={generalColorTokens} />;
};

export const backgroundColors = () => {
  return <DesignTokensViewer tokens={backgroundColorTokens} />;
};

export const borderRadius = () => {
  return (
    <DesignTokensViewer
      tokens={borderRadiusTokens}
      additionalStyles={{ borderRadius: 'none', border: 'solid black' }}
      cssKey={'border-radius'}
    />
  );
};
export const borderSize = () => {
  return (
    <DesignTokensViewer
      tokens={borderSizeTokens}
      additionalStyles={{ border: 'solid black' }}
      cssKey={'border-width'}
    />
  );
};
export const boxShadow = () => {
  return (
    <DesignTokensViewer
      tokens={boxShadowTokens}
      additionalStyles={{ border: 'none' }}
      cssKey={'box-shadow'}
    />
  );
};

export const fontSizes = () => {
  return (
    <DesignTokensViewer
      tokens={fontSizeTokens}
      cssKey={'font-size'}
      box={false}
    />
  );
};

export const fontWeights = () => {
  return (
    <DesignTokensViewer
      tokens={fontWeightTokens}
      cssKey={'font-weight'}
      box={false}
    />
  );
};

export const fontFamily = () => {
  return (
    <DesignTokensViewer
      tokens={fontFamilyTokens}
      cssKey={'font-family'}
      box={false}
    />
  );
};

export const headingsSizes = () => {
  return (
    <DesignTokensViewer
      tokens={headingsSizeTokens}
      cssKey={'font-size'}
      box={false}
    />
  );
};
