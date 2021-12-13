import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { ShoeStoreApp } from './app';

export const ShoeStoreBasic = () => {
  return (
    <MemoryRouter>
      <ReactRouterRoutingProvider>
        <ShoeStoreApp></ShoeStoreApp>
      </ReactRouterRoutingProvider>
    </MemoryRouter>
  );
};
