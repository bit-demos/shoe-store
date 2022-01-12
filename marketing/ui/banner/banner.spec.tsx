import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicBanner } from './banner.composition';

it('checks the banner has a text', () => {
  render(<BasicBanner />);
  const bannerText = screen.getByRole('heading', { name: /banner text/i });
  expect(bannerText).toBeInTheDocument();
});
