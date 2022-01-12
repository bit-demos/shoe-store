import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicShoesDetails } from './shoes-details.composition';

it('checks card contains image, heading, price, size, colors and button to add to cart', () => {
  render(<BasicShoesDetails />);
  const image = screen.getByRole('img');
  expect(image).toHaveAttribute(
    'src',
    'https://images.unsplash.com/photo-1617689563472-c66428e83d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  );
  expect(image).toHaveAttribute(
    'alt',
    'Pair of Nike Air trainers in pink, yellow and purple'
  );

  const heading = screen.getByRole('heading', { name: /Ecco/i });
  expect(heading).toBeInTheDocument();

  const price = screen.getByTestId('test-currency');
  expect(price).toHaveTextContent('$ 130');

  const size = screen.getByRole('combobox', { name: /choose a size/i });
  expect(size).toBeInTheDocument();

  const color = screen.getByText(/Choose a color:/i);
  expect(color).toBeInTheDocument();

  const colors = screen.getByLabelText('navy');
  expect(colors).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /add to cart/i });
  expect(button).toBeInTheDocument();
});
