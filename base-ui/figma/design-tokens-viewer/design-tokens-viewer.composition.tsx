import React from 'react';
import { DesignTokensViewer } from './design-tokens-viewer';

const primaryColorTokens = {
  primaryColor: '#6c5ce7',
  primaryHeavy: '#5d4aec',
  primaryLight: '#897dec',
  textOnPrimary: '#ffffff',
  primaryBg: '#c9c3f6',
  primaryBgHeavy: '#3e29df'
};

export const BasicDesignTokensViewer = () => (
  <DesignTokensViewer tokens={primaryColorTokens} />
);
