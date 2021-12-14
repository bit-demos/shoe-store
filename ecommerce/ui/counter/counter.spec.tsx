import React from 'react';
import { render } from '@testing-library/react';
import { BasicCounter } from './counter.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicCounter />);
  const rendered = getByText(1);
  expect(rendered).toBeTruthy();
});
