import React from 'react';
import classNames from 'classnames';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Hero } from '@learn-bit-react/base-ui.ui.hero';
import styles from './store-hero.module.scss';

export type StoreHeroProps = {
  /**
   * background for the hero which modifies the css background property to add image or color
   */
  background: string;
  /**
   * a text to be rendered in the heading.
   */
  headingText: string;
  /**
   * a text to be rendered in the link.
   */
  linkText: string;
  /**
   * link href
   */
  href: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function StoreHero({
  headingText,
  linkText,
  href,
  background,
  className
}: StoreHeroProps) {
  return (
    <Hero
      className={classNames(styles.hero, className)}
      background={background}
    >
      <Heading className={styles.heading}>{headingText}</Heading>
      <Button as="a" white href={href}>
        {linkText}
      </Button>
    </Hero>
  );
}
