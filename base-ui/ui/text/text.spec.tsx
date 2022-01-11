import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextDefault, TextAsP, TextAsSpan } from './text.composition';

it('should render text with default set to p', () => {
  render(<TextDefault />);
  const textDefault = screen.getByText(/text default to p tag/i);
  expect(textDefault).toContainHTML('p');
});

it('should render text as p', () => {
  render(<TextAsP />);
  const textDefault = screen.getByText(/text as a p tag/i);
  expect(textDefault).toContainHTML('p');
});

it('should render text as span', () => {
  render(<TextAsSpan />);
  const textDefault = screen.getByText(/text as a span tag/i);
  expect(textDefault).toContainHTML('span');
});
