import React from 'react';
import { useState } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { Input } from '@learn-bit-react/base-ui.ui.forms.input';
import styles from './counter.module.scss';
import classNames from 'classnames';

export type CounterProps = {
  /**
   * min Value of counter
   */
  min?: number;
  /**
   * max Value
   */
  max?: number;
  /**
   * increment value
   */
  increment?: number;
  /**
   * decrement value
   */
  decrement?: number;
  /**
   * a function that registers the quantity
   */
  quantitySelected: (count: number) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export function Counter({
  min = 1,
  max = 20,
  increment = 1,
  decrement = 1,
  quantitySelected // oncountchange
}: CounterProps) {
  const [count, setCount] = useState(min);

  function handleClickAdd() {
    if (count < max) {
      setCount(count + increment);
      quantitySelected(count + increment);
    }
  }
  function handleClickSubtract() {
    if (count > min) {
      setCount(count - decrement);
      quantitySelected(count - decrement);
    }
  }

  function handleClick(e) {
    setCount(e.target.valueAsNumber);
    quantitySelected(e.target.valueAsNumber);
  }

  return (
    <div className={styles.counter}>
      <Button counter onClick={handleClickSubtract}>
        -
      </Button>
      <Input
        className={styles.input}
        type="number"
        min={min}
        max={max}
        value={count}
        width="100px"
        onChange={handleClick}
      />
      <Button counter onClick={handleClickAdd}>
        +
      </Button>
    </div>
  );
}
