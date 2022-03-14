import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { ShoeStoreApp } from './app';
import { pinkTheme } from '@learn-bit-react/base-ui.themes.pink-theme';
import { purpleTheme } from '@learn-bit-react/base-ui.themes.purple-theme';
import { greenTheme } from '@learn-bit-react/base-ui.themes.green-theme';

export const ShoeStoreDefaultTheme = () => {
  return (
    <MemoryRouter>
      <ReactRouterRoutingProvider>
        <ShoeStoreApp></ShoeStoreApp>
      </ReactRouterRoutingProvider>
    </MemoryRouter>
  );
};

export const ShoeStorePinkTheme = () => {
  return (
    <MemoryRouter>
      <ReactRouterRoutingProvider>
        <ShoeStoreApp theme={pinkTheme}></ShoeStoreApp>
      </ReactRouterRoutingProvider>
    </MemoryRouter>
  );
};

export const ShoeStoreGreenTheme = () => {
  return (
    <MemoryRouter>
      <ReactRouterRoutingProvider>
        <ShoeStoreApp theme={greenTheme}></ShoeStoreApp>
      </ReactRouterRoutingProvider>
    </MemoryRouter>
  );
};

export const ShoeStorePurpleTheme = () => {
  return (
    <MemoryRouter>
      <ReactRouterRoutingProvider>
        <ShoeStoreApp theme={purpleTheme}></ShoeStoreApp>
      </ReactRouterRoutingProvider>
    </MemoryRouter>
  );
};
