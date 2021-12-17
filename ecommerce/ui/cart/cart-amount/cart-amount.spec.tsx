import React from 'react';
import { render } from '@testing-library/react';
import { BasicCartAmount } from './cart-amount.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCartAmount/>);
  const rendered = getByText('hello from CartAmount');
  expect(rendered).toBeTruthy();
});

