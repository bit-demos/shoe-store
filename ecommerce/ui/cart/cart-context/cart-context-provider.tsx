import React, { useReducer, useState, HTMLAttributes } from 'react';
import {
  CartContext,
  CartContextType,
  CartListItem,
  CartItemBase
} from './cart-context';

export type CartContextProps<TItemType extends CartItemBase> = {
  context: React.Context<CartContextType<TItemType>>;
} & HTMLAttributes<HTMLDivElement>;

export function CartContextProvider<TItemType extends CartItemBase>({
  children,
  // product,
  // productId,
  context
}: CartContextProps<TItemType>) {
  const [products, setProducts] = useState<CartListItem<TItemType>[]>([]);

  // const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const getProductById = (id: string): CartListItem<TItemType> => {
    return products.find((p) => p.item.id === id);
  };

  const addProductToCart = (product: CartListItem<TItemType>): void => {
    // setTimeout(() => {
    //   dispatch({
    //     type: ADD_PRODUCT,
    //     product
    //   });
    // }, 100);

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
  const removeProductFromCart = (product: CartListItem<TItemType>) => {
    // const updatedItemIndex = products.findIndex(
    //   (p) => p.item.id === product.item.id
    // );
    const newProducts = products.filter((p) => p.item.id !== product.item.id);

    console.log(newProducts);
    setProducts(newProducts);
    // updatedItem.quantity--;
    // if (updatedItem.quantity <= 0) {
    //   products.splice(updatedItemIndex, 1);
    // } else {
    //   products[updatedItemIndex] = updatedItem;
    // }

    // setTimeout(() => {
    //   dispatch({ type: REMOVE_PRODUCT, productId: id });
    // }, 100);
    // TODO Debbie remove logic
  };

  const contextValue: CartContextType<TItemType> = {
    //products: products,
    cart: products,
    addProductToCart: addProductToCart,
    removeProductFromCart: removeProductFromCart
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}
