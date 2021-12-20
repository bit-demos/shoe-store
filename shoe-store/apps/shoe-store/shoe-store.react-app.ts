import { ReactAppOptions } from '@teambit/react';
import { Netlify } from '@teambit/apps.netlify';

const netlify = new Netlify(
  process.env.NETLIFY_AUTH_TOKEN as string,
  'bit-shoe-store',
  'yona'
);

export const ShoeStoreApp: ReactAppOptions = {
  name: 'shoe-store',
  entry: [require.resolve('./shoe-store.app-root')],
  deploy: netlify.deploy.bind(netlify),
  prerenderRoutes: ['/products', '/cart']
};
export default ShoeStoreApp;
