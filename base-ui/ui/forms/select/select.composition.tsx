import React from 'react';
import { Label } from '@learn-bit-react/base-ui.ui.forms.label';
import { Select } from './select';

export const BasicSelect = () => <Select options={['32', '33', '34']} />;

export const SelectWithText = () => (
  <Select options={['apple', 'banana', 'orange']} />
);

export const SelectWithLabel = () => (
  <>
    <Label htmlFor="fruit-select">Choose a fruit:</Label>
    <Select
      id="fruit-select"
      options={['--Please choose an option--', 'apple', 'banana', 'orange']}
    />
  </>
);
