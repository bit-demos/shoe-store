import React from 'react';
import { render } from '@testing-library/react';
import { BasicThemeToggler } from './theme-toggler.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicThemeToggler />);

  const rendered = getByText('dark mode' || 'light mode');
  expect(rendered).toBeTruthy();
});
