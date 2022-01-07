import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  BasicSelectSize,
  SelectSizeAndShowSelectedSize
} from './select-size.composition';

it('checks select has a label and id', () => {
  render(<BasicSelectSize />);
  const basicSelectSize = screen.getByRole('combobox', {
    name: /choose a size/i
  });
  expect(basicSelectSize).toHaveAttribute('id', 'size');
});

it('checks value changes when user chooses a new size', () => {
  render(<SelectSizeAndShowSelectedSize />);
  const selectSizeAndShowSelectedSize = screen.getByRole('combobox', {
    name: /choose a size/i
  });
  expect(selectSizeAndShowSelectedSize).toHaveValue('36');
  fireEvent.change(selectSizeAndShowSelectedSize, { target: { value: '45' } });
  expect(selectSizeAndShowSelectedSize).toHaveValue('45');
});
