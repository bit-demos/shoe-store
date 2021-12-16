import React from 'react';
import { Counter } from './counter';

export const BasicCounter = () => (
  <Counter quantitySelected={(count) => count} />
);

export const CounterWithAlert = () => (
  <Counter
    quantitySelected={(count) => {
      alert(count);
      return count;
    }}
  />
);
