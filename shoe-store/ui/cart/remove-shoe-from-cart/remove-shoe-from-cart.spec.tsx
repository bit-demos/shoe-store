import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { FunctionalRemoveShoeFromCart } from './remove-shoe-from-cart.composition';

it('should remove a product to cart', () => {
  render(<FunctionalRemoveShoeFromCart />);
  const buttonAdd = screen.getByRole('button', { name: /add to cart/i });
  fireEvent.click(buttonAdd);

  const cart = screen.getByTestId('cart');
  expect(cart).toBeInTheDocument();

  const buttonRemove = screen.getByRole('button', {
    name: /remove from cart/i
  });
  expect(buttonRemove).toBeInTheDocument();
  fireEvent.click(buttonRemove);

  expect(cart).not.toBeInTheDocument();
});
