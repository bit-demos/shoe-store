export enum ProductType {
  product = 'product',
}

export type ProductFromApi = {
  title: string;
  text: string;
  alt: string;
  src: string;
  price: number;
  id: string;
  rating: number;
};

export class Product {
  constructor(
    /**
     * title of product
     */
    public title: string,
    /**
     * text of product
     */
    public text: string,
    /**
     * alt of image
     */
    public alt: string,
    /**
     * scr of image
     */
    public src: string,
    /**
     * price for product
     */
    public price: number,
    /**
     * id of the product
     */
    readonly id: string,
    /**
     * rating of the product
     */
    public rating: number
  ) {}

  static fromApiObject(object: ProductFromApi) {
    return new Product(object.title, object.text, object.alt, object.src, object.price, object.id, object.rating);
  }
}
