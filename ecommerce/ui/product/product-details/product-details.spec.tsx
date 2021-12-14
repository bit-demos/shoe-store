import React from 'react';
import { render } from '@testing-library/react';
import { BasicProductDetails } from './product-details.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProductDetails />);
  const rendered = getByText('Camper');
  expect(rendered).toBeTruthy();
});
