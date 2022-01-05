import React from 'react';
import classNames from 'classnames';
import styles from './select.module.scss';

export type SelectProps = {
  /**
   * array of options to be displayed in the select
   */
  options: Array<any>;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export function Select({ className, options, children, ...rest }: SelectProps) {
  return (
    <div className={classNames(styles.selectWrapper, className)}>
      <select className={classNames(styles.select, className)} {...rest}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
