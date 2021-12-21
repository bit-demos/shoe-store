import {
  Product,
  ProductFromApi
} from '@learn-bit-react/ecommerce.entity.product';

export type PlainShoes = {
  availableSizes: number[];
  availableColors: string[];
} & ProductFromApi;

export class CatalogShoe {
  constructor(
    readonly shoe: Product,
    /**
     * size of the shoe
     */
    readonly availableSizes: number[],
    /**
     * color of the shoe
     */
    readonly availableColors: string[]
  ) {}

  /**
   * determines if a certain size of available
   */
  isSizeAvailable(wantedSize: number) {
    return !!this.availableSizes.find((size) => size === wantedSize);
  }

  /**
   * return a serializable shoes object.
   */
  toObject() {
    return {
      ...this.shoe,
      availableSizes: this.availableSizes,
      availableColors: this.availableColors
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
    const shoes = new CatalogShoe(
      Product.fromApiObject(plainShoes),
      plainShoes.availableSizes,
      plainShoes.availableColors
    );
    return shoes;
  }
}
