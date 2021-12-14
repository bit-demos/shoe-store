import React from 'react';
import { Select } from './select';

export const BasicSelect = () => <Select options={['32', '33', '34']} />;

export const SelectWithText = () => (
  <Select options={['apple', 'banana', 'orange']} />
);

export const SelectWithLabel = () => (
  <>
    <label htmlFor="fruit-select">Choose a fruit:</label>
    <Select
      id="fruit-select"
      options={['--Please choose an option--', 'apple', 'banana', 'orange']}
    />
  </>
);
