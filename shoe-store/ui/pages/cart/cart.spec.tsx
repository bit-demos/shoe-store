import React from 'react';
import { render } from '@testing-library/react';
import { EmptyCart } from './cart.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<EmptyCart />);
  const rendered = getByText('no products to display');
  expect(rendered).toBeTruthy();
});
