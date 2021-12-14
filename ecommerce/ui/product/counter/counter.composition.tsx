import React from 'react';
import { Counter } from './counter';

export const BasicCounter = () => (
  <Counter
    quantitySelected={(count) => {
      alert(count);
    }}
  />
);
