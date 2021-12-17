import React from 'react';
import { render } from '@testing-library/react';
import { BasicAddToCart } from './add-to-cart.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAddToCart/>);
  const rendered = getByText('hello from AddToCart');
  expect(rendered).toBeTruthy();
});

