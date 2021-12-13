import React, { useState } from 'react';
import { SelectSize } from './select-size';

export function BasicSelectSize() {
  return (
    <>
      <SelectSize
        sizeSelected={(size) => {
          console.log(size);
        }}
        availableSizes={[45, 46, 47]}
      />
    </>
  );
}
