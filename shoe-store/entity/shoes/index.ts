import { CatalogShoe } from './shoes';
import { mockShoesDataMen } from './shoes-men.mocks';
import { mockShoesDataWomen } from './shoes-women.mocks';
import { mockShoesDataHome } from './shoes-home.mocks';
import { mockShoesDataChildren } from './shoes-children.mocks';

export { mockShoesWomen } from './shoes-women.mocks';
export { mockShoesHome } from './shoes-home.mocks';
export { mockShoesMen, mockShoesDataMen } from './shoes-men.mocks';
export { mockShoesChildren } from './shoes-children.mocks';

export { CatalogShoe } from './shoes';
export type { Shoe } from './shoe';
export { PlainShoes } from './shoes';

export const allShoes = mockShoesDataMen
  .concat(mockShoesDataWomen)
  .concat(mockShoesDataHome)
  .concat(mockShoesDataChildren)
  .map((shoe) => CatalogShoe.from(shoe));
