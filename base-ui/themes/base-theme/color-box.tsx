import React from 'react';

export function ColorBox({
  colorName,
  value
}: {
  colorName: string;
  value: string;
}) {
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
