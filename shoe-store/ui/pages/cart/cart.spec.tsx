import React from 'react';
import { render } from '@testing-library/react';
import { BasicCart } from './cart.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCart/>);
  const rendered = getByText('hello from Cart');
  expect(rendered).toBeTruthy();
});

