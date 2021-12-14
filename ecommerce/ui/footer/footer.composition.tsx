import React from 'react';
import { MemoryRouter } from 'react-router';
import { Footer } from './footer';

export const BasicFooter = () => (
  <MemoryRouter>
    <Footer
      logoText="Bit Perfume Store"
      src="https://static.bit.dev/bit-logo.svg"
      alt="Bit Logo"
    >
      Links go here
    </Footer>
  </MemoryRouter>
);
