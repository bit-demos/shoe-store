import React from 'react';
import { render } from '@testing-library/react';
import { BasicShoesCard } from './shoes-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicShoesCard />);
  const rendered = getByText('Nike Air');
  expect(rendered).toBeTruthy();
});
