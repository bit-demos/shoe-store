import React from 'react';
import { render } from '@testing-library/react';
import { BasicProduct } from './product.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProduct/>);
  const rendered = getByText('hello from Product');
  expect(rendered).toBeTruthy();
});

