import React from 'react';
import { AvailableColors } from './available-colors';

export const BasicAvailableColors = () => (
  <AvailableColors
    colorSelected={(color) => {
      console.log('selected color:', color);
    }}
    availableColors={['red', 'green', 'blue']}
  />
);
