import React from 'react';
import { MemoryRouter } from 'react-router';
import { Header } from './header';

export const BasicHeader = () => (
  <MemoryRouter>
    <Header
      logoText="Bit Sports Store"
      src="https://static.bit.dev/bit-logo.svg"
      alt="Bit Logo"
    >
      add some links here
    </Header>
  </MemoryRouter>
);
