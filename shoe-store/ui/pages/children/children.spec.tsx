import React from 'react';
import { render } from '@testing-library/react';
import { BasicChildren } from './children.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicChildren />);
  const rendered = getByText("Children's Shoes Online");
  expect(rendered).toBeTruthy();
});
