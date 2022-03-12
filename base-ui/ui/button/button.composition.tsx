import React from 'react';
import { Button } from './button';
import { PinkTheme } from '@learn-bit-react/base-ui.themes.pink-theme';
export const PrimaryButton = () => <Button primary>Primary</Button>;

export const PrimaryButtonDisabled = () => (
  <Button primary disabled>
    Primary
  </Button>
);

export const SecondaryButton = () => <Button secondary>Secondary</Button>;

export const SecondaryButtonDisabled = () => (
  <Button secondary disabled>
    Secondary
  </Button>
);

export const WhiteButton = () => <Button white>White</Button>;

export const WhiteButtonDisabled = () => (
  <Button white disabled>
    White
  </Button>
);

export const ButtonAsLink = () => (
  <Button primary link href="/">
    Link
  </Button>
);
export const CounterButton = () => <Button counter>+</Button>;

export const Tailwind = () => (
  <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-20">
    Tailwind Button
  </Button>
);
