import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { Product } from './product';

export const BasicProduct = () => {
  return (
    <MemoryRouter>
      <ReactRouterRoutingProvider>
        <Product />
      </ReactRouterRoutingProvider>
    </MemoryRouter>
  );
};
