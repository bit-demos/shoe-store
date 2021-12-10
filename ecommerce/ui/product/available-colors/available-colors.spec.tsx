import React from 'react';
import { render } from '@testing-library/react';
import { BasicAvailableColors } from './available-colors.composition';

it('should show the right color', () => {
  const { getByTestId } = render(<BasicAvailableColors />);
  const rendered = getByTestId('blue');
  expect(rendered).toBeTruthy();
});
