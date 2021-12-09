import React from 'react';
import { useState } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { Input } from '@learn-bit-react/shoe-store.ui.forms.input';
import styles from './counter.module.scss';

export type CounterProps = {};

export function Counter({}: CounterProps) {
  const [count, setCount] = useState(0);

  function handleClickAdd() {
    if (count <= 20) {
      setCount(count + 1);
    }
  }
  function handleClickSubtract() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <Button secondary onClick={handleClickSubtract}>
        -1
      </Button>
      <Input
        className={styles.input}
        type="number"
        min="0"
        max="20"
        value={count}
        width="100px"
        onChange={(e) => setCount(e.target.valueAsNumber)}
      />
      <Button secondary onClick={handleClickAdd}>
        +1
      </Button>
    </div>
  );
}
