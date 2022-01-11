import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicLabel } from './label.composition';

it('checks label has a text and for attribute', () => {
  render(<BasicLabel />);
  const basicLabel = screen.getByText(/choose a size/i);
  expect(basicLabel).toHaveAttribute('for', 'size');
});
