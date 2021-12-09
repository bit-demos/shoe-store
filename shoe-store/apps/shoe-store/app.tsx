import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '@learn-bit-react/shoe-store.ui.pages.home';
import { Women } from '@learn-bit-react/shoe-store.ui.pages.women';
import { Men } from '@learn-bit-react/shoe-store.ui.pages.men';
import { Product } from '@learn-bit-react/shoe-store.ui.pages.product';
import { Children } from '@learn-bit-react/shoe-store.ui.pages.children';
import { About } from '@learn-bit-react/shoe-store.ui.pages.about';
import { Header } from '@learn-bit-react/ecommerce.ui.header';
import { Footer } from '@learn-bit-react/ecommerce.ui.footer';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { Link } from '@learn-bit-react/base-ui.ui.link';
import { Theme } from '@learn-bit-react/base-ui.themes.theme';
import styles from './shoe-store.module.scss';

export function ShoeStoreApp() {
  return (
    <BrowserRouter>
      <Theme colors={styles.colors}>
        <Layout>
          <Header
            logoText="Bit Shoe Store"
            src="https://static.bit.dev/bit-logo.svg"
            alt="Bit Logo"
          >
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/children">Children</Link>
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
            <Route path="/product">
              <Product />
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
      </Theme>
    </BrowserRouter>
  );
}
