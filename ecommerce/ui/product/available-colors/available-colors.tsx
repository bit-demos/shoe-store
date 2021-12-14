import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './available-colors.module.scss';

export type AvailableColorsProps = {
  /**
   * array of available colors
   */
  availableColors: string[];
  /**
   * a function that registers the selected color.
   */
  colorSelected: (color) => void;
} & React.HTMLAttributes<HTMLElement>;

export function AvailableColors({
  availableColors,
  className,
  colorSelected
}: AvailableColorsProps) {
  const [color, setColor] = useState(availableColors[0]);

  function handleClick(e) {
    setColor(e.target.computedName);
    colorSelected(e.target.computedName);
  }

  return (
    <ul className={classNames(styles['color-list'], className)}>
      {availableColors.map((availableColor) => {
        return (
          <li
            className={classNames(
              styles['color-list-item'],
              color === availableColor ? styles.active : ''
            )}
            key={availableColor}
          >
            <span
              aria-label={availableColor}
              data-testid={availableColor}
              style={{ backgroundColor: availableColor }}
              onClick={handleClick}
              className={classNames(styles['color-circle'])}
            ></span>
          </li>
        );
      })}
    </ul>
  );
}
