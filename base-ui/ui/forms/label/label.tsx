import React from 'react';
import classNames from 'classnames';
import styles from './label.module.scss';

export type LabelProps = {} & React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export function Label({ children, className, ...rest }: LabelProps) {
  return (
    <label className={classNames(styles.label, className)} {...rest}>
      {children}
    </label>
  );
}
