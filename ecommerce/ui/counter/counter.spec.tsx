import React from 'react';
import { render } from '@testing-library/react';
import { BasicCounter } from './counter.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCounter/>);
  const rendered = getByText('hello from Counter');
  expect(rendered).toBeTruthy();
});

