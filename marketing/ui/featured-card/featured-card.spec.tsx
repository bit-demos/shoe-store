import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicFeaturedCard } from './featured-card.composition';

it('checks card contains image, heading, price and links to product', () => {
  render(<BasicFeaturedCard />);
  const image = screen.getByRole('img');
  expect(image).toHaveAttribute(
    'src',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
  );
  expect(image).toHaveAttribute('alt', 'image description');
  const heading = screen.getByRole('heading', { name: /Product Name/i });
  expect(heading).toBeInTheDocument();
  const price = screen.getByTestId('test-currency');
  expect(price).toHaveTextContent('$ 190');
  const link = screen.getByRole('link', { name: /See Product/i });
  expect(link).toHaveAttribute('href', '/product/m-1');
});
