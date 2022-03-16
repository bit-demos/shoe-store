import React from 'react';
import { render, screen } from '@testing-library/react';
import { DarkColors } from './dark-theme.composition';

it('should have style with css var and correct color', () => {
  render(<DarkColors />);
  const darkColors = screen.getByTestId('theme-provider');
  expect(darkColors).toHaveStyle('--text-color:#fff');
});
