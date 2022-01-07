import React, { useState } from 'react';
import { SelectSize } from './select-size';

export function BasicSelectSize() {
  return (
    <SelectSize
      sizeSelected={(size) => {
        null;
      }}
      availableSizes={[36, 37, 38, 39]}
    />
  );
}

export function SelectSizeAndShowSelectedSize() {
  const sizes = [36, 37, 38, 39, 40, 45, 46, 47];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <>
      <SelectSize
        sizeSelected={(size) => {
          setSelectedSize(parseInt(size));
        }}
        availableSizes={sizes}
      />
      <p>You're selected size is: {selectedSize}</p>
    </>
  );
}
