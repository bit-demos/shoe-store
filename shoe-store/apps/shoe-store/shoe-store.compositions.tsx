import React from 'react';
import { MemoryRouter } from 'react-router-dom';
// change when ESM is supported
// import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { ShoeStoreApp } from './app';

// export const ShoeStoreBasic = () => {
//   return (
//     <MemoryRouter>
//       <ReactRouterRoutingProvider>
//         <ShoeStoreApp></ShoeStoreApp>
//       </ReactRouterRoutingProvider>
//     </MemoryRouter>
//   );
// };

import { useLocation } from 'react-router-dom';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { Link } from '@teambit/ui-foundation.ui.react-router.link';
import { NavLink } from '@teambit/ui-foundation.ui.react-router.nav-link';

const reactRouterRouting = { Link, NavLink, useLocation };

export const ShoeStoreBasic = () => {
  return (
    <MemoryRouter>
      <RoutingProvider value={reactRouterRouting}>
        <ShoeStoreApp></ShoeStoreApp>
      </RoutingProvider>
    </MemoryRouter>
  );
};
