import React from 'react';
import { render } from '@testing-library/react';
import { BasicWomen } from './women.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicWomen />);
  const rendered = getByText("Women's Shoes Online");
  expect(rendered).toBeTruthy();
});
