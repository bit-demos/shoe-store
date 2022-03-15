import React from 'react';
import { colors } from './index';

const textColors = [
  '--text-color',
  '--text-color-heavy',
  '--text-color-light',
  '--text-inactive'
];
const borderColors = [
  '--border-color',
  '--border-color-heavy',
  '--border-color-light',
  '--border-color-lightest'
];

const primaryColors = [
  '--primary-color',
  '--primary-heavy',
  '--primary-light',
  '--primary-text',
  '--primary-text-heavy',
  '--text-on-primary',
  '--primary-bg',
  '--primary-bg-heavy'
];
const secondaryColors = [
  '--secondary-color',
  '--secondary-heavy',
  '--secondary-light',
  '--secondary-text',
  '--secondary-text-heavy',
  '--text-on-secondary',
  '--secondary-bg',
  '--secondary-bg-heavy'
];
const bgColors = [
  '--bg-color',
  '--bg-heavy',
  '--bg-heaviest',
  '--bg-heaviest',
  '--bg-bedrock',
  '--bg-navigation',
  '--bg-overlay',
  '--bg-modal',
  '--bg-tooltip',
  '--bg-tooltip-heavy',
  '--bg-dent'
];
const errorColors = [
  '--error-color',
  '--error-heavy',
  '--error-light',
  '--error-bg',
  '--error-bg-heavy'
];

export function PrimaryColors() {
  return (
    <div className={colors}>
      {primaryColors.map((color) => (
        <ColorBox colorName={color} key={color} />
      ))}
    </div>
  );
}
export function SecondaryColors() {
  return (
    <div className={colors}>
      {secondaryColors.map((color) => (
        <ColorBox colorName={color} key={color} />
      ))}
    </div>
  );
}

export function BgColors() {
  return (
    <div className={colors}>
      {bgColors.map((color) => (
        <ColorBox colorName={color} key={color} />
      ))}
    </div>
  );
}

export function TextColors() {
  return (
    <div className={colors}>
      {textColors.map((color) => (
        <ColorBox colorName={color} key={color} />
      ))}
    </div>
  );
}

export function BorderColors() {
  return (
    <div className={colors}>
      {borderColors.map((color) => (
        <ColorBox colorName={color} key={color} />
      ))}
    </div>
  );
}
export function ErrorColors() {
  return (
    <div className={colors}>
      {errorColors.map((color) => (
        <ColorBox colorName={color} key={color} />
      ))}
    </div>
  );
}

function ColorBox({ colorName }: { colorName: string }) {
  return (
    <div style={{ display: 'flex', borderRadius: 4, marginBottom: 4 }}>
      <div
        style={{
          background: `var(${colorName})`,
          width: 20,
          height: 20,
          borderRadius: 4,
          marginRight: 8,
          border: '1px solid black'
        }}
        data-testid={colorName}></div>
      <div>{colorName}</div>
    </div>
  );
}
