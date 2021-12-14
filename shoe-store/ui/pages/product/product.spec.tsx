import React from 'react';
import { render } from '@testing-library/react';
import { BasicProduct } from './product.composition';

it.skip('should render a product', () => {
  const { getByText } = render(<BasicProduct />);
  const rendered = getByText('Ecco');
  expect(rendered).toBeTruthy();
});
