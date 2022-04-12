import React from 'react';
import { render, screen } from '@testing-library/react';
import { LightColors } from './light-theme.composition';

it.skip('should have style with css var and correct color', () => {
  render(<LightColors />);
  const lightTheme = screen.getByTestId('theme-provider');
  expect(lightTheme).toHaveStyle('--text-color:#000');
});
