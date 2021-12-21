import { Product } from '@learn-bit-react/ecommerce.entity.product';

export type Shoe = {
  size: number;
  color: string;
} & Product;
