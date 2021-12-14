import React, { useState } from 'react';
import { Select } from '@learn-bit-react/base-ui.ui.forms.select';

import styles from './select-size.module.scss';

export type SelectSizeProps = {
  /**
   * a text to be rendered in the component.
   */
  availableSizes: number[];
  /**
   * a function that registers the selected size.
   */
  sizeSelected: (size) => void;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function SelectSize({
  availableSizes,
  sizeSelected,
  ...rest
}: SelectSizeProps) {
  const [size, setSize] = useState(availableSizes[0]);

  function handleChange(e) {
    setSize(e.target.value);
    sizeSelected(e.target.value);
  }

  return (
    <Select
      className={styles.select}
      options={availableSizes}
      onChange={handleChange}
      {...rest}
    />
  );
}
