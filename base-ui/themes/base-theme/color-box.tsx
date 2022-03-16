import React from 'react';

export type ColorBoxProps = {
  value: string | number;
  colorName: string;
};

export function ColorBox({ colorName, value }: ColorBoxProps) {
  return (
    <>
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          border: '1px solid black',
          background: value
        }}
      />
      <span>{colorName}</span>
      <div>
        <code>{value}</code>
      </div>
    </>
  );
}
