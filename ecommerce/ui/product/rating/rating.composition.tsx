import React from 'react';
import { Rating } from './rating';

export const BasicRating = () => <Rating />;

export const ThreeStarRating = () => <Rating stars={3} />;

export const SetStarRating = () => <Rating stars={5} setStars={true} />;
