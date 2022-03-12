import React from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';

export type CardProps = {} & React.HTMLAttributes<HTMLElement>;

export function Card({ children, className }: CardProps) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}
