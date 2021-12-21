import React, { useState, HTMLAttributes } from 'react';
import { CartContextType, CartListItem, CartItemBase } from './cart-context';

export type CartContextProps<TItemType extends CartItemBase> = {
  context: React.Context<CartContextType<TItemType>>;
} & HTMLAttributes<HTMLDivElement>;

export function CartContextProvider<TItemType extends CartItemBase>({
  children,
  context
}: CartContextProps<TItemType>) {
  const [products, setProducts] = useState<CartListItem<TItemType>[]>([]);

  const getProductById = (id: string): CartListItem<TItemType> | undefined => {
    return products.find((p) => p.item.id === id);
  };

  const addProductToCart = (product: CartListItem<TItemType>): void => {
    {
      const existingProduct = getProductById(product.item.id);
      let newState: CartListItem<TItemType>[] = [];
      if (existingProduct) {
        newState = products.map((p) => {
          if (p.item.id === existingProduct.item.id) {
            return {
              item: p.item,
              quantity: p.quantity + product.quantity
            };
          }
          return p;
        });
        setProducts(newState);
      }
      setProducts([...products, product]);
    }
  };
  const removeProductFromCart = (product: TItemType) => {
    const newProducts = products.filter((p) => p.item.id !== product.id);

    setProducts(newProducts);
  };

  const contextValue: CartContextType<TItemType> = {
    cart: products,
    addProductToCart: addProductToCart,
    removeProductFromCart: removeProductFromCart
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}
