import React from 'react';
import { render } from '@testing-library/react';
import { BasicCard } from './card.composition';

it('should render something inside it', () => {
  const { getByText } = render(<BasicCard />);
  const rendered = getByText('Anything can be rendered inside the card');
  expect(rendered).toBeTruthy();
});
