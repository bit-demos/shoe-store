import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomeShoes } from './home-shoes.composition';

it('should render with the correct text', () => {
  const { getAllByText } = render(<BasicHomeShoes />);
  const rendered = getAllByText('Stylish Shoes Online');
  expect(rendered).toBeTruthy();
});
