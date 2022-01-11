import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputWithPlaceholder, InputWithLabel } from './input.composition';

it('should render with a placeholder and have value when typed', () => {
  render(<InputWithPlaceholder />);
  const inputWithPlaceholder =
    screen.getByPlaceholderText(/write something here/i);
  userEvent.type(inputWithPlaceholder, 'Hello');
  expect(inputWithPlaceholder).toHaveValue('Hello');
});

it('should render with a label', () => {
  render(<InputWithLabel />);
  const inputWithLabel = screen.getByLabelText(/label for input/i);
  userEvent.type(inputWithLabel, 'Hello');
  expect(inputWithLabel).toHaveValue('Hello');
});
