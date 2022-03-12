import React from 'react';
import { render } from '@testing-library/react';
import { BasicStoreHero } from './store-hero.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicStoreHero />);
  const rendered = getByText('store heading');
  expect(rendered).toBeTruthy();
});
