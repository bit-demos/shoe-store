import React from 'react';
import { render } from '@testing-library/react';
import { TextDefault, TextAsP, TextAsSpan } from './text.composition';

it('should render text with default set to p', () => {
  const { getByText } = render(<TextDefault />);
  const rendered = getByText('text default to p tag');
  expect(rendered).toContainHTML('p');
});

it('should render text as p', () => {
  const { getByText } = render(<TextAsP />);
  const rendered = getByText('text as a p tag');
  expect(rendered).toContainHTML('p');
});

it('should render text as span', () => {
  const { getByText } = render(<TextAsSpan />);
  const rendered = getByText('text as a span tag');
  expect(rendered).toContainHTML('span');
});
