import React from 'react';

export type HeadingProps = {
  /**
   * html element to be rendered
   */
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({ children, element, className }: HeadingProps) {
  const Element = element || 'h1';
  return <Element className={className}>{children}</Element>;
}
