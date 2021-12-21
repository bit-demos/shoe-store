import React from 'react';
import { render } from '@testing-library/react';
import { BasicAmountOfShoesInCart } from './amount-of-shoes-in-cart.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAmountOfShoesInCart/>);
  const rendered = getByText('hello from AmountOfShoesInCart');
  expect(rendered).toBeTruthy();
});

