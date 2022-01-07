import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryButtonDisabled,
  PrimaryButtonDisabled,
  WhiteButton,
  WhiteButtonDisabled,
  ButtonAsLink
} from './button.composition';

it('should render a button with the class of primary', () => {
  render(<PrimaryButton />);
  const primaryButton = screen.getByRole('button', { name: /primary/i });
  expect(primaryButton).toHaveClass('primary');
});

it('should render a disabled button with the class of primary', () => {
  render(<PrimaryButtonDisabled />);
  const primaryButtonDisabled = screen.getByRole('button', {
    name: /primary/i
  });
  expect(primaryButtonDisabled).toHaveClass('primary');
  expect(primaryButtonDisabled).toBeDisabled();
});

it('should render a button with the class of secondary', () => {
  render(<SecondaryButton />);
  const secondaryButton = screen.getByRole('button', { name: /secondary/i });
  expect(secondaryButton).toHaveClass('secondary');
});

it('should render a disabled button with the class of secondary', () => {
  render(<SecondaryButtonDisabled />);
  const secondaryButtonDisabled = screen.getByRole('button', {
    name: /secondary/i
  });
  expect(secondaryButtonDisabled).toHaveClass('secondary');
  expect(secondaryButtonDisabled).toBeDisabled();
});

it('should render a button with the class of white', () => {
  render(<WhiteButton />);
  const whiteButton = screen.getByRole('button', { name: /white/i });
  expect(whiteButton).toHaveClass('white');
});

it('should render a disabled button with the class of white', () => {
  render(<WhiteButtonDisabled />);
  const whiteButtonDisabled = screen.getByRole('button', { name: /white/i });
  expect(whiteButtonDisabled).toHaveClass('white');
  expect(whiteButtonDisabled).toBeDisabled();
});

it('should render a button as a Link, checks for href attribute and primary class', () => {
  render(<ButtonAsLink />);
  const buttonAsLink = screen.getByRole('link', { name: /link/i });
  expect(buttonAsLink).toHaveClass('primary');
  expect(buttonAsLink).toHaveAttribute('href', '/');
});
