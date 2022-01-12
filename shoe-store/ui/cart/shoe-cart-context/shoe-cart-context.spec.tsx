import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { BasicShoeCartContext } from './shoe-cart-context.composition';

it('adds a product to cart context and removes it', () => {
  render(<BasicShoeCartContext />);
  const cartItems = screen.getByText('Cart (0)');

  const buttonAdd = screen.getByRole('button', { name: /add to cart/i });
  fireEvent.click(buttonAdd);
  expect(cartItems).toHaveTextContent('Cart (1)');

  const buttonRemove = screen.getByRole('button', { name: /x/i });
  fireEvent.click(buttonRemove);
  expect(cartItems).toHaveTextContent('Cart (0)');
});
