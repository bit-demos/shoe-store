import React from 'react';
import { useState } from 'react';

import styles from './rating.module.scss';

export type ProductDetailsProps = {
  /**
   * number of stars
   */
  stars?: number;
  /**
   * number of stars
   */
  setStars?: boolean;
};

export function Rating({ stars = 1, setStars = false }: ProductDetailsProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(stars)].map((star, index) => {
        index += 1;
        if (setStars) {
          return (
            <button
              key={index}
              className={index <= (hover || rating) ? styles.on : styles.off}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        } else {
          return (
            <span key={index} className={styles.rating}>
              &#9733;
            </span>
          );
        }
      })}
    </div>
  );
}
