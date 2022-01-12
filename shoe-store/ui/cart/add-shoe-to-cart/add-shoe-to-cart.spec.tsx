import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { BasicAddShoeToCart } from './add-shoe-to-cart.composition';

it('should add a product to cart', () => {
  render(<BasicAddShoeToCart />);
  const button = screen.getByRole('button', { name: /add to cart/i });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  const cart = screen.getByTestId('cart');
  expect(cart).toBeInTheDocument();
});
