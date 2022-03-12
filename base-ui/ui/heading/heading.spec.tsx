import React from 'react';
import { render } from '@testing-library/react';
import { H1DefaultHeading } from './heading.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<H1DefaultHeading />);
  const rendered = getByText('H1 Heading');
  expect(rendered).toBeTruthy();
});
