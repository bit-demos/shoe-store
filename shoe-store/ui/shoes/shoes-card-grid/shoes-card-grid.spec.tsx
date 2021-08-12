import React from 'react';
import { render } from '@testing-library/react';
import { BasicShoesCardGrid } from './shoes-card-grid.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicShoesCardGrid />);
  const rendered = getByText('Guchi');
  expect(rendered).toBeTruthy();
});
