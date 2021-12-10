import React from 'react';
import { render } from '@testing-library/react';
import { BasicSelectSize } from './select-size.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSelectSize/>);
  const rendered = getByText('hello from SelectSize');
  expect(rendered).toBeTruthy();
});

