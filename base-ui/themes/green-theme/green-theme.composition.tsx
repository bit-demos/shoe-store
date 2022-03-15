import React from 'react';
import { GreenTheme } from './green-theme';
import { greenTheme } from './green-theme-tokens';
import { primaryColorTokens } from './design-tokens/primary-color-tokens';
import { secondaryColorTokens } from './design-tokens/secondary-color-tokens';
import { ColorBox } from '@learn-bit-react/base-ui.themes.base-theme';

export const primaryColors = () => {
  return (
    <GreenTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(primaryColorTokens).map(([key, value]) => (
          <ColorBox key={key} colorName={key} value={value} />
        ))}
      </div>
    </GreenTheme>
  );
};

export const secondaryColors = () => {
  return (
    <GreenTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(secondaryColorTokens).map(([key, value]) => (
          <ColorBox key={key} colorName={key} value={value} />
        ))}
      </div>
    </GreenTheme>
  );
};

const gridStyle = {
  width: 'fit-content',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  gap: '16px 4px'
};
