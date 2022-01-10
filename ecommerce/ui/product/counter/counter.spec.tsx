import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BasicCounter } from './counter.composition';

let basicCounter;
let increaseCount;
let decreaseCount;

beforeEach(() => {
  render(<BasicCounter />);
  basicCounter = screen.getByRole('spinbutton');
  increaseCount = screen.getByRole('button', { name: '+' });
  decreaseCount = screen.getByRole('button', { name: '-' });
});

it('should render a counter with value of 1', () => {
  expect(basicCounter).toHaveValue(1);
});

it('should increase count when plus button is clicked', () => {
  expect(basicCounter).toHaveValue(1);
  userEvent.click(increaseCount);
  expect(basicCounter).toHaveValue(2);
});

it('should decrease count when minus button is clicked', () => {
  userEvent.click(increaseCount);
  expect(basicCounter).toHaveValue(2);
  userEvent.click(decreaseCount);
  expect(basicCounter).toHaveValue(1);
});

it('should not decrease to less than 1', () => {
  expect(basicCounter).toHaveValue(1);
  userEvent.click(decreaseCount);
  expect(basicCounter).toHaveValue(1);
});
