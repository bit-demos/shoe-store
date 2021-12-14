import React from 'react';
import { SelectSize } from './select-size';

export function BasicSelectSize() {
  return (
    <>
      <SelectSize
        sizeSelected={(size) => {
          alert(size);
        }}
        availableSizes={[45, 46, 47]}
      />
    </>
  );
}
