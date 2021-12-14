import React from 'react';
import { render } from '@testing-library/react';
import { InputWithPlaceholder, InputWithLabel } from './input.composition';

it('should render with a placeholder', () => {
  const { getByPlaceholderText } = render(<InputWithPlaceholder />);
  const rendered = getByPlaceholderText('write something here');
  expect(rendered).toBeTruthy();
});

it('should render with a label', () => {
  const { getByLabelText } = render(<InputWithLabel />);
  const rendered = getByLabelText('Label for Input');
  expect(rendered).toBeTruthy();
});
