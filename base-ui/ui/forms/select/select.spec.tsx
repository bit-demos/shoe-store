import React from 'react';
import { render } from '@testing-library/react';
import { BasicSelect } from './select.composition';

it('should render select options', () => {
  const { getByText } = render(<BasicSelect />);
  const rendered = getByText('32');
  expect(rendered).toBeTruthy();
});
