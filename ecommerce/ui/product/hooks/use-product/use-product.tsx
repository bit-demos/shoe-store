import { useState } from 'react';
import { Product } from '@learn-bit-react/ecommerce.entity.product';

export function useProduct(): [() => void, Product[], boolean] {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(false);

  function getProducts() {
    setIsLoading(true);

    fetch(
      'https://raw.githubusercontent.com/bit-demos/shoe-store/main/shoe-store/entity/shoes/shoes.json'
    ).then((response) => {
      response.json().then((rawProducts: any) => {
        setProducts(
          rawProducts.map(
            (rawProduct: any) =>
              new Product(
                rawProduct.title,
                rawProduct.description,
                rawProduct.alt,
                rawProduct.src,
                rawProduct.price,
                rawProduct.buttonText
              )
          )
        );
        setIsLoading(false);
      });
    });
  }

  return [getProducts, products, isLoading];
}
