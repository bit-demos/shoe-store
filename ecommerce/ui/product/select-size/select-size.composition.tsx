import React from 'react';
import { SelectSize } from './select-size';

export function BasicSelectSize() {
  return (
    <SelectSize
      sizeSelected={(size) => {
        null;
      }}
      availableSizes={[36, 37, 38, 39, 40, 45, 46, 47]}
    />
  );
}

export function AlertSelectSize() {
  return (
    <SelectSize
      sizeSelected={(size) => {
        alert(size);
      }}
      availableSizes={[45, 46, 47]}
    />
  );
}
