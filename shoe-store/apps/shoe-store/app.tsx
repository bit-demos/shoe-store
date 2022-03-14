import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { Home } from '@learn-bit-react/shoe-store.ui.pages.home';
import { Women } from '@learn-bit-react/shoe-store.ui.pages.women';
import { Men } from '@learn-bit-react/shoe-store.ui.pages.men';
import { Product } from '@learn-bit-react/shoe-store.ui.pages.product';
import { Cart } from '@learn-bit-react/shoe-store.ui.pages.cart';
import { Children } from '@learn-bit-react/shoe-store.ui.pages.children';
import { About } from '@learn-bit-react/shoe-store.ui.pages.about';
import { Header } from '@learn-bit-react/ecommerce.ui.header';
import { Footer } from '@learn-bit-react/ecommerce.ui.footer';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { Link } from '@learn-bit-react/base-ui.ui.link';
import { ShoeCartContextProvider } from '@learn-bit-react/shoe-store.ui.cart.shoe-cart-context';
import { AmountOfShoesInCart } from '@learn-bit-react/shoe-store.ui.cart.amount-of-shoes-in-cart';
import { ThemeContextProvider } from '@learn-bit-react/base-ui.themes.theme-provider';
import { Theme } from '@learn-bit-react/base-ui.themes.theme-provider';
import {
  PinkTheme,
  pinkTheme
} from '@learn-bit-react/base-ui.themes.pink-theme';
import {
  PurpleTheme,
  purpleTheme
} from '@learn-bit-react/base-ui.themes.purple-theme';

import styles from './shoe-store.module.scss';
// hack to use tailwindcss classes: remove when we can add tailwindcss to an app aspect
import './tailwind-hack.scss';
export function ShoeStoreApp({ theme = purpleTheme }) {
  return (
    <ShoeCartContextProvider>
      <ReactRouterRoutingProvider useBrowserRouter>
        <ThemeContextProvider mainTheme={theme} className={theme.fontFamily}>
          <Layout className={styles.layout}>
            <Header
              logoText="Bit Shoe Store"
              src="https://static.bit.dev/bit-logo.svg"
              alt="Bit Logo"
            >
              <Link href="/men">Men</Link>
              <Link href="/women">Women</Link>
              <Link href="/children">Children</Link>
              <Link href="/cart">
                <AmountOfShoesInCart />
              </Link>
            </Header>

            <Switch>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/women">
                <Women />
              </Route>
              <Route path="/children">
                <Children />
              </Route>
              <Route path="/men">
                <Men />
              </Route>
              <Route path="/product/:id">
                <Product />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer
              logoText="Bit Shoe Store"
              src="https://static.bit.dev/bit-logo.svg"
              alt="Bit Logo"
            >
              <Link href="/privacy">Privacy</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
            </Footer>
          </Layout>
        </ThemeContextProvider>
      </ReactRouterRoutingProvider>
    </ShoeCartContextProvider>
  );
}
