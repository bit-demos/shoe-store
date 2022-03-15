import React from 'react';
import { render, screen } from '@testing-library/react';
import { GreenThemeCCSVars, GreenThemeCSSJS } from './green-theme.composition';

it('should have style with css var and correct color', () => {
  render(<GreenThemeCCSVars />);
  const greenThemeCCSVars = screen.getByTestId('theme-provider');
  expect(greenThemeCCSVars).toHaveStyle('--primary-color:#52B788;');
});

it('should have style with css var and with correct color', () => {
  render(<GreenThemeCSSJS />);
  const greenThemeCSSJS = screen.getByTestId('theme-provider');
  expect(greenThemeCSSJS).toHaveStyle('--primary-color:#52B788;');
});
