import React from 'react';
import { render } from '@testing-library/react';
import { BasicMen } from './men.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMen />);
  const rendered = getByText("Men's Shoes Online");
  expect(rendered).toBeTruthy();
});
