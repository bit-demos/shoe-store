import React from 'react';
import { render } from '@testing-library/react';
import { BasicSelectSize } from './select-size.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicSelectSize />);
  const rendered = getByText('45');
  expect(rendered).toBeTruthy();
});
