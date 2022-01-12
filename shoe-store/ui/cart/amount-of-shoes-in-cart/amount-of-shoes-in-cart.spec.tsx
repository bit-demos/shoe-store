import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { FunctionalAmountOfShoesInCart } from './amount-of-shoes-in-cart.composition';

it('should show amount of shoes in cart and change when product is added or removed', () => {
  render(<FunctionalAmountOfShoesInCart />);
  const cartItems = screen.getByText('Cart (0)');
  expect(cartItems).toBeInTheDocument();

  const buttonAdd = screen.getByRole('button', { name: /add to cart/i });
  fireEvent.click(buttonAdd);
  expect(cartItems).toHaveTextContent('Cart (1)');

  const buttonRemove = screen.getByRole('button', { name: /x/i });
  fireEvent.click(buttonRemove);
  expect(cartItems).toHaveTextContent('Cart (0)');
});
