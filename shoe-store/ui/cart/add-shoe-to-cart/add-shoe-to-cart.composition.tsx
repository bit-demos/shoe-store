import React from 'react';
import { AddShoeToCart } from './add-shoe-to-cart';

const shoe = {
  id: 'm-15',
  title: 'Camper',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus',
  alt: 'Pair of Converse 2 in black with red heart',
  src: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  price: 280,
  rating: 5,
  size: 37,
  color: 'red'
};

export const BasicAddShoeToCart = () => (
  <div>
    <AddShoeToCart item={{ ...shoe }} quantity={1} />
  </div>
);
