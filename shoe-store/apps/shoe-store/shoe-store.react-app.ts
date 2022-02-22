import { ReactAppOptions } from '@teambit/react';
import {
  Netlify,
  NetlifyOptions
} from '@teambit/cloud-providers.deployers.netlify';

const netlifyConfig: NetlifyOptions = {
  team: 'teambit',
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  siteName: 'bit-shoe-store'
};

export const netlify = new Netlify(netlifyConfig);

export const ShoeStoreApp: ReactAppOptions = {
  name: 'shoe-store',
  entry: [require.resolve('./shoe-store.app-root')],
  prerender: {
    routes: ['/']
  },
  // prerenderRoutes: ['/products', '/cart']
  deploy: netlify.deploy.bind(netlify)
};
export default ShoeStoreApp;
