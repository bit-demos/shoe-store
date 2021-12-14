import React from 'react';
import { AvailableColors } from './available-colors';

export const BasicAvailableColors = () => (
  <AvailableColors
    colorSelected={(color) => {
      alert(color);
    }}
    availableColors={['red', 'green', 'blue']}
  />
);
