import React from 'react';
import { render } from '@testing-library/react';
import { BasicRemoveFromCart } from './remove-from-cart.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRemoveFromCart />);
  const rendered = getByText('Remove from Cart');
  expect(rendered).toBeTruthy();
});
