import React from 'react';
import classNames from 'classnames';
import styles from './text.module.scss';

export type TextProps = {
  /**
   * text rendered as p element or span element
   */
  element?: 'p' | 'span';
} & React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>;

export function Text({ children, element, className }: TextProps) {
  const Element = element || 'p';

  return (
    <Element className={classNames(styles.text, className)}>{children}</Element>
  );
}
