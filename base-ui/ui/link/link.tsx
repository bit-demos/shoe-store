import React from 'react';
import classNames from 'classnames';
import { Link as BaseLink } from '@teambit/base-react.navigation.link';

import styles from './link.module.scss';

export type LinkProps = {} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({ children, className, ...rest }: LinkProps) {
  return (
    <BaseLink className={classNames(className, styles.link)} {...rest}>
      {children}
    </BaseLink>
  );
}
