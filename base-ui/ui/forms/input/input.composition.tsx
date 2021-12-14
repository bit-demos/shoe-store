import React, { useState } from 'react';
import { Input } from './input';

export const BasicInput = () => <Input />;

export const InputWithPlaceholder = () => (
  <Input placeholder="write something here" />
);

export const InputWithLabel = () => (
  <>
    <label htmlFor="input">Label for Input</label>
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
      {inputValue}
    </>
  );
}
