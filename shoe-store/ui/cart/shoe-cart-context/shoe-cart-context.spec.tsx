import React from 'react';
import { render } from '@testing-library/react';
import { BasicShoeCartContext } from './shoe-cart-context.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicShoeCartContext/>);
  const rendered = getByText('hello from ShoeCartContext');
  expect(rendered).toBeTruthy();
});

