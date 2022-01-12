import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicShoesCard } from './shoes-card.composition';

it('checks card contains image, heading, price and links to product', () => {
  render(<BasicShoesCard />);
  const image = screen.getByRole('img');
  expect(image).toHaveAttribute(
    'src',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHNuZWFrZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  );
  expect(image).toHaveAttribute('alt', 'Nike Air');
  const heading = screen.getByRole('heading', { name: /Nike Air/i });
  expect(heading).toBeInTheDocument();
  const price = screen.getByTestId('test-currency');
  expect(price).toHaveTextContent('$ 160');
  const link = screen.getByRole('link', { name: /See Product/i });
  expect(link).toHaveAttribute('href', '/product/m-1');
});
