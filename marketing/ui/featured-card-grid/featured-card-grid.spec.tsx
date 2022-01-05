import React from 'react';
import { render } from '@testing-library/react';
import { BasicFeaturedCardGrid } from './featured-card-grid.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicFeaturedCardGrid />);
  const rendered = getByText('hello from FeaturedCardGrid');
  expect(rendered).toBeTruthy();
});
