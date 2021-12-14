import React from 'react';
import { render } from '@testing-library/react';
import { BasicLink } from './link.composition';

it('Link should render to an a tag and contain a href and some text', () => {
  const { getByText } = render(<BasicLink />);
  const rendered = getByText('About');
  expect(rendered).toContainHTML('a');
  expect(rendered).toContainHTML('href');
});
