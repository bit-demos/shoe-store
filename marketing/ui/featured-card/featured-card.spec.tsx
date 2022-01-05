import React from 'react';
import { render } from '@testing-library/react';
import { BasicFeaturedCard } from './featured-card.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicFeaturedCard />);
  const rendered = getByText('hello from FeaturedCard');
  expect(rendered).toBeTruthy();
});
