import React from 'react';
import { render } from '@testing-library/react';
import { BasicFooter } from './footer.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFooter />);
  const rendered = getByText('Bit Perfume Store');
  expect(rendered).toBeTruthy();
});
