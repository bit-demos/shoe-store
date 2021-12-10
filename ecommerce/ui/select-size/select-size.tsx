import React, { useState } from 'react';
import { Select } from '@learn-bit-react/shoe-store.ui.forms.select';

import styles from './select-size.module.scss';

export type SelectSizeProps = {
  /**
   * a text to be rendered in the component.
   */
  sizes: number[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function SelectSize({ sizes, ...rest }: SelectSizeProps) {
  const [size, setSize] = useState(sizes[0]);

  function handleChange(e) {
    setSize(e.target.value);
  }
  return (
    <Select
      className={styles.select}
      options={sizes}
      onChange={handleChange}
      {...rest}
    />
  );
}
