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
import { ColorBox } from './color-box';

export const primaryColors = () => {
  return (
    <BaseTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(primaryColorTokens).map(([key, value]) => (
          <ColorBox key={key} colorName={key} value={value} />
        ))}
      </div>
    </BaseTheme>
  );
};

export const secondaryColors = () => {
  return (
    <BaseTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(secondaryColorTokens).map(([key, value]) => (
          <ColorBox key={key} colorName={key} value={value} />
        ))}
      </div>
    </BaseTheme>
  );
};

export const errorColors = () => {
  return (
    <BaseTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(errorColorTokens).map(([key, value]) => (
          <ColorBox key={key} colorName={key} value={value} />
        ))}
      </div>
    </BaseTheme>
  );
};
export const textColors = () => {
  return (
    <BaseTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(textColorTokens).map(([key, value]) => (
          <ColorBox key={key} colorName={key} value={value} />
        ))}
      </div>
    </BaseTheme>
  );
};
export const generalColors = () => {
  return (
    <BaseTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(generalColorTokens).map(([key, value]) => (
          <ColorBox key={key} colorName={key} value={value} />
        ))}
      </div>
    </BaseTheme>
  );
};

export const backgroundColors = () => {
  return (
    <BaseTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(backgroundColorTokens).map(([key, value]) => (
          <ColorBox key={key} colorName={key} value={value} />
        ))}
      </div>
    </BaseTheme>
  );
};

export const borderRadius = () => {
  return (
    <BaseTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(borderRadiusTokens).map(([key, value]) => (
          <>
            <div
              style={{
                width: 40,
                height: 40,
                border: 'solid black',
                borderRadius: value
              }}
            />
            <span>{key}</span>
            <div>
              <code>{value}</code>
            </div>
          </>
        ))}
      </div>
    </BaseTheme>
  );
};
export const borderSize = () => {
  return (
    <BaseTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(borderSizeTokens).map(([key, value]) => (
          <>
            <div
              style={{
                width: 40,
                height: 40,
                border: value,
                borderStyle: 'solid',
                borderColor: 'black'
              }}
            />
            <span>{key}</span>
            <div>
              <code>{value}</code>
            </div>
          </>
        ))}
      </div>
    </BaseTheme>
  );
};
export const boxShadow = () => {
  return (
    <BaseTheme>
      <div
        style={{
          ...gridStyle
        }}
      >
        {Object.entries(boxShadowTokens).map(([key, value]) => (
          <>
            <div
              style={{
                width: 40,
                height: 40,
                boxShadow: value
              }}
            />
            <span>{key}</span>
            <div>
              <code>{value}</code>
            </div>
          </>
        ))}
      </div>
    </BaseTheme>
  );
};

export const fontSizes = () => {
  return (
    <BaseTheme>
      <div>
        {Object.entries(fontSizeTokens).map(([key, value]) => (
          <p
            key={key}
            style={{
              fontSize: `${value}`
            }}
          >
            {key}:{' '}
            <span style={{ marginLeft: '8px' }}>
              <code>{value}</code>
            </span>
          </p>
        ))}
      </div>
    </BaseTheme>
  );
};

export const fontWeights = () => {
  return (
    <BaseTheme>
      <div>
        {Object.entries(fontWeightTokens).map(([key, value]) => (
          <p
            key={key}
            style={{
              fontWeight: `${value}`
            }}
          >
            {key}:{' '}
            <span style={{ marginLeft: '8px' }}>
              <code>{value}</code>
            </span>
          </p>
        ))}
      </div>
    </BaseTheme>
  );
};

export const fontFamily = () => {
  return (
    <BaseTheme>
      <div style={{ maxWidth: '300px' }}>
        {Object.entries(fontFamilyTokens).map(([key, value]) => (
          <div style={{ borderBottom: '1px solid black', padding: '10px' }}>
            <p
              key={key}
              style={{
                fontFamily: `${value}`
              }}
            >
              {key}:
            </p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </BaseTheme>
  );
};

export const headingsSizes = () => {
  return (
    <BaseTheme>
      <div>
        {Object.entries(headingsSizeTokens).map(([key, value]) => (
          <p
            key={key}
            style={{
              fontSize: `${value}`
            }}
          >
            {key}:{' '}
            <span style={{ marginLeft: '8px' }}>
              <code>{value}</code>
            </span>
          </p>
        ))}
      </div>
    </BaseTheme>
  );
};

const gridStyle = {
  width: 'fit-content',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  gap: '16px 4px'
};
