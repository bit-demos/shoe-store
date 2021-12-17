import React from 'react';
import { render } from '@testing-library/react';
import { BasicCartContext } from './cart-context.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCartContext />);
  const rendered = getByText('hello from CartContext');
  expect(rendered).toBeTruthy();
});
