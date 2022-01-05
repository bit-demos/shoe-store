import React from 'react';
import { button } from './index';

export const PrimaryButton = () => (
  <button className={button} data-variation="primary">
    Hello
  </button>
);

export const PrimaryButtonDisabled = () => (
  <button className={button} data-variation="primary" disabled>
    Hello
  </button>
);

export const SecondaryButton = () => (
  <button className={button} data-variation="secondary">
    Hello
  </button>
);

export const SecondaryButtonDisabled = () => (
  <button className={button} data-variation="secondary" disabled>
    Hello
  </button>
);

export const WhiteButton = () => <button className={button}>Hello</button>;

export const WhiteButtonDisabled = () => (
  <button className={button} disabled>
    Hello
  </button>
);
