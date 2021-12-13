import { Shoes } from './shoes';

export const mockShoesDataHome = [
  {
    id: 'h-1',
    title: 'Nike Air',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus',
    alt: 'Pair of Nike Air trainers in pink, yellow and purple',
    src: 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    price: 110,
    buttonText: 'add to cart',
    availableSizes: [36, 37, 38, 39],
    availableColors: ['navy']
  },
  {
    id: 'h-2',
    title: 'Grungers',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus',
    alt: 'Pair of Converse in red and black',
    src: 'https://images.unsplash.com/photo-1532736006876-5892689550a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    price: 140,
    buttonText: 'buy now',
    availableSizes: [36, 37, 38, 39],
    availableColors: ['black', 'beige', 'white', 'brown']
  },
  {
    id: 'h-3',
    title: 'Syrps',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus',
    alt: 'Pair of Yeezy in white',
    src: 'https://images.unsplash.com/photo-1622624951068-5a8782eaf99a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    price: 180,
    buttonText: 'I want them',
    availableSizes: [36, 37, 38, 39],
    availableColors: ['black', 'pink', 'beige']
  },
  {
    id: 'h-4',
    title: 'Vans',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus',
    alt: 'Pair of Nike M35',
    src: 'https://images.unsplash.com/photo-1535292862972-e61ccf5b7e61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    price: 90,
    buttonText: 'I want them',
    availableSizes: [36, 37, 38, 39],
    availableColors: ['black', 'pink', 'white', 'blue']
  },
  {
    id: 'h-5',
    title: 'Timberland',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus',
    alt: 'Pair of Nike Air Classic in white',
    src: 'https://images.unsplash.com/photo-1549660299-31c4ea5f34c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    price: 150,
    buttonText: 'add to cart',
    availableSizes: [36, 37, 38, 39],
    availableColors: ['black', 'pink', 'white', 'blue']
  },
  {
    id: 'h-6',
    title: 'Wedgers',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus',
    alt: 'Pair of Adidas Ultra in yellow',
    src: 'https://images.unsplash.com/photo-1609011809547-fec587101c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    price: 120,
    buttonText: 'buy now',
    availableSizes: [36, 37, 38, 39],
    availableColors: ['black', 'pink', 'white', 'blue']
  },

  {
    id: 'h-7',
    title: 'Vans Casual',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus',
    alt: 'Pair Nike Air 2 in black and red',
    src: 'https://images.unsplash.com/photo-1586882829458-8ea808157fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    price: 90,
    buttonText: 'add to cart',
    availableSizes: [36, 37, 38, 39],
    availableColors: ['black', 'pink', 'white', 'blue']
  },
  {
    id: 'h-8',
    title: 'New Balance',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus',
    alt: 'Pair of Nike Louis in beige nad brown',
    src: 'https://images.unsplash.com/photo-1508721713313-60b1109e2d4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    price: 110,
    buttonText: 'buy now',
    availableSizes: [36, 37, 38, 39],
    availableColors: ['black', 'brown', 'white']
  }
];

export function mockShoesHome() {
  return mockShoesDataHome.map((plainShoes) => {
    return Shoes.from(plainShoes);
  });
}
