import React from 'react';
import { render } from '@testing-library/react';
import { BasicRemoveShoeFromCart } from './remove-shoe-from-cart.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicRemoveShoeFromCart />);
  const rendered = getByText('Remove from Cart');
  expect(rendered).toBeTruthy();
});
