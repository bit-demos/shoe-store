import React, { useState } from 'react';
import { Label } from '@learn-bit-react/base-ui.ui.forms.label';
import { Input } from './input';

export const BasicInput = () => <Input />;

export const InputWithPlaceholder = () => (
  <Input placeholder="write something here" />
);

export const InputWithLabel = () => (
  <>
    <Label htmlFor="input">Label for Input</Label>
    <Input placeholder="write something here" id="input" />
  </>
);

export function InputWithState() {
  const [inputValue, setInputValue] = useState('');

  function handleClick(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
      <Input
        placeholder="write something here"
        value={inputValue}
        id="input"
        onChange={handleClick}
      />
      <p>{inputValue}</p>
    </>
  );
}
