import React from 'react';
import { MemoryRouter } from 'react-router';
import { ShoesCard } from './shoes-card';

export const BasicShoesCard = () => (
  <MemoryRouter>
    <ShoesCard
      title="Nike Air"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"
      alt="Nike Air"
      src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHNuZWFrZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      price={160}
      buttonText="add to cart"
      size={[36, 38]}
      availableColors={['blue', 'black']}
    />
  </MemoryRouter>
);
