import React from 'react';
import { Button } from './button';

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

export const ButtonAsInternalLink = () => (
  <Button primary link href="/">
    Internal Link
  </Button>
);

// export const ButtonAsATag = () => (
//   <Button primary as="a" href="/">
//     External Link
//   </Button>
// );
