import React from 'react';
import { render } from '@testing-library/react';
import { BasicCartUsage } from './cart-context.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicCartUsage />);
  const rendered = getByText('hello from CartContext');
  expect(rendered).toBeTruthy();
});
