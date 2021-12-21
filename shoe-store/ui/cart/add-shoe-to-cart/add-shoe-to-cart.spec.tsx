import React from 'react';
import { render } from '@testing-library/react';
import { BasicAddShoeToCart } from './add-shoe-to-cart.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicAddShoeToCart />);
  const rendered = getByText('hello from AddShoeToCart');
  expect(rendered).toBeTruthy();
});
