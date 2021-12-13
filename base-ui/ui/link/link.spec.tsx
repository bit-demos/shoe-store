import React from 'react';
import { render } from '@testing-library/react';
import { BasicLink } from './link.composition';

it('Link should contain some text', () => {
  const { getByText } = render(<BasicLink />);
  const rendered = getByText('About');
  expect(rendered).toBeTruthy();
});
