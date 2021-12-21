import React from 'react';
import { render } from '@testing-library/react';
import { BasicRemoveShoeFromCart } from './remove-shoe-from-cart.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRemoveShoeFromCart/>);
  const rendered = getByText('hello from RemoveShoeFromCart');
  expect(rendered).toBeTruthy();
});

