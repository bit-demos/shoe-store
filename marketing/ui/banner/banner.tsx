import React from 'react';
import { Hero } from '@learn-bit-react/base-ui.ui.hero';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import styles from './banner.module.scss';
import classNames from 'classnames';

export type BannerProps = {
  /**
   * a background image to be rendered in the component.
   */
  background: string;
  /**
   * a text to be rendered in the banner.
   */
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Banner({ background, text, className }: BannerProps) {
  return (
    <Hero
      background={background}
      className={classNames(styles.hero, className)}
    >
      <Heading element="h4" className={styles.heading}>
        {text}
      </Heading>
    </Hero>
  );
}
