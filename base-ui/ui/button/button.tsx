import React from 'react';
import classNames from 'classnames';
import { Link } from '@learn-bit-react/base-ui.ui.link';

import styles from './button.module.scss';

export type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  /**
   * content of the button
   */
  children: string;
  /**
   * sets the button as primary
   */
  primary?: boolean;
  /**
   * sets the button as secondary
   */
  secondary?: boolean;
  /**
   * sets the button as white
   */
  white?: boolean;
  /**
   * sets the button as a counter button
   */
  counter?: boolean;
  /**
   * renders the Link component instead of the button
   */
  link?: boolean;
  /**
   * href if using Link component
   */
  href?: string;
  /**
   * uses any element instead of button such as an <a> tag for external links
   */
  as?: E;
};

export type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let buttonClassName = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) buttonClassName += key + ' ';
  }
  return buttonClassName.trim();
};

export function Button<E extends React.ElementType = typeof defaultElement>({
  children,
  primary = false,
  secondary = false,
  white = false,
  link = false,
  counter = false,
  as,
  href = '',
  className,
  ...rest
}: ButtonProps<E>) {
  const buttonClassName = createClassNames({
    primary,
    secondary,
    white,
    counter
  });
  const TagName = as || defaultElement;

  return (
    <>
      {!link ? (
        <TagName
          className={classNames(
            styles.button,
            styles[buttonClassName],
            className
          )}
          {...rest}
        >
          {children}
        </TagName>
      ) : (
        <Link
          href={href}
          className={classNames(
            styles.button,
            styles[buttonClassName],
            className
          )}
          {...rest}
        >
          {children}
        </Link>
      )}
    </>
  );
}
