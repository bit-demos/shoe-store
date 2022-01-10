import React, { useState } from 'react';
import { Counter } from './counter';

export const BasicCounter = () => <Counter onCountChange={(count) => count} />;

export function CounterWithSetCount() {
  const [count, setCount] = useState(1);
  return (
    <>
      <Counter
        onCountChange={(count) => {
          setCount(count);
        }}
      />
      <p>Count is: {count}</p>
    </>
  );
}

export function CounterStartingAtZeroWithSetCount() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter
        onCountChange={(count) => {
          setCount(count);
        }}
        min={0}
      />
      <p>Count is: {count}</p>
    </>
  );
}

export function CounterIncrementByFiveWithSetCount() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter
        onCountChange={(count) => {
          setCount(count);
        }}
        min={0}
        increment={5}
        decrement={5}
      />
      <p>Count is: {count}</p>
    </>
  );
}
