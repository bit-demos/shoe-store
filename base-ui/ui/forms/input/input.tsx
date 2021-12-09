import React from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';

export type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: InputProps) {
  return <input className={classNames(styles.input, className)} {...rest} />;
}
