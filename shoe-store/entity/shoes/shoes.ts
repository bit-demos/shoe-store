import {
  Product,
  ProductFromApi
} from '@learn-bit-react/ecommerce.entity.product';

export type PlainShoes = {
  size: number[];
  availableColors: string[];
  id: string;
} & ProductFromApi;

export class Shoes {
  constructor(
    readonly product: Product,
    /**
     * size of the shoe
     */
    readonly size: number[],
    /**
     * color of the shoe
     */
    readonly availableColors: string[],
    /**
     * id of the shoe
     */
    readonly id: string
  ) {}

  /**
   * determines if a certain size of available
   */
  isSizeAvailable(wantedSize: number) {
    return !!this.size.find((size) => size === wantedSize);
  }

  /**
   * return a serializable shoes object.
   */
  toObject() {
    return {
      ...this.product,
      size: this.size,
      availableColors: this.availableColors,
      id: this.id
    };
  }

  /**
   * serialize shoes.
   */
  toString() {
    return JSON.stringify(this.toObject());
  }

  /**
   * factory method for instantiating shoe objects.
   */
  static from(plainShoes: PlainShoes) {
    const shoes = new Shoes(
      Product.fromApiObject(plainShoes),
      plainShoes.size,
      plainShoes.availableColors,
      plainShoes.id
    );
    return shoes;
  }
}
