import React, { useState, useContext, useReducer, useEffect } from 'react';
import classNames from 'classnames';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import { AvailableColors } from '@learn-bit-react/ecommerce.ui.product.available-colors';
import { Rating } from '@learn-bit-react/ecommerce.ui.product.rating';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Counter } from '@learn-bit-react/ecommerce.ui.product.counter';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { SelectSize } from '@learn-bit-react/ecommerce.ui.product.select-size';
import { Shoe, Shoes } from '@learn-bit-react/shoe-store.entity.shoes';
import { allShoes } from '@learn-bit-react/shoe-store.entity.shoes';

import styles from './product-details.module.scss';

export type ProductDetailsProps = {
  /**
   * product
   */
  product: Shoes;
} & React.HTMLAttributes<HTMLDivElement>;

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const MainNavigation = (props) => (
  <header className="main-navigation">Cart ({props.cartItemNumber})</header>
);
const addProductToCart = (
  product,
  selectedSize,
  selectedColor,
  selectedQuantity,
  state
) => {
  const updatedCart = [...state.cart];

  updatedCart.push({
    ...product,
    quantity: selectedQuantity,
    selectedSize,
    selectedColor
  });

  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  console.log('Removing product with id: ' + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.product.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(
        action.product,
        action.selectedSize,
        action.selectedColor,
        action.selectedQuantity,
        state
      );
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};
const ShopContext = React.createContext({
  products: allShoes,
  cart: [],
  addProductToCart: (
    product,
    selectedSize,
    selectedColor,
    selectedQuantity
  ) => {},
  removeProductFromCart: (productId) => {}
});

const GlobalState = (props) => {
  const products = allShoes;
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (
    product,
    selectedSize,
    selectedColor,
    selectedQuantity
  ) => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT,
        product,
        selectedSize,
        selectedColor,
        selectedQuantity
      });
    }, 100);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 100);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const context = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0]);
  const [selectedColor, setSelectedColor] = useState(
    product.availableColors[0]
  );
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const {
    product: { id, src, title, text, price, alt, rating },
    availableColors,
    availableSizes
  } = product;

  function sizeChanged(size) {
    setSelectedSize(parseInt(size));
  }

  function colorChanged(color) {
    setSelectedColor(color);
  }

  function quantityChanged(quantity) {
    setSelectedQuantity(quantity);
  }

  return (
    <GlobalState>
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            <MainNavigation
              cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
            />
            {context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
            <div className="flex flex-row">
              <div
                className={classNames(
                  styles.productDetails,
                  'flex flex-col pt-6 md:flex-row '
                )}
              >
                <Img
                  className={classNames(styles.img, 'mx-auto md:mx-0')}
                  src={src}
                  alt={alt}
                />
                <div className={classNames(styles.details, 'xs:p-16 md:pl-16')}>
                  <Heading element="h2" className="text-5xl mb-8">
                    {title}
                  </Heading>
                  <Rating stars={rating} className="mb-4" />
                  <Currency price={price} className="mb-4 text-2xl" />
                  <Text className="mb-4">{text}</Text>
                  <div>
                    <Counter
                      quantitySelected={quantityChanged}
                      className="my-4"
                    />
                    <div className="my-4">
                      <label htmlFor="size">Choose a size: </label>
                      <SelectSize
                        id="size"
                        sizeSelected={sizeChanged}
                        className={styles.select}
                        availableSizes={availableSizes}
                      />
                    </div>
                  </div>
                  <Text>Choose a color: </Text>
                  <AvailableColors
                    colorSelected={colorChanged}
                    className={styles.availableColors}
                    availableColors={availableColors}
                  />
                  <Button
                    primary
                    onClick={() =>
                      context.addProductToCart(
                        product,
                        selectedSize,
                        selectedColor,
                        selectedQuantity
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>

              <main className="cart">
                {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
                <ul>
                  {context.cart.map((cartItem, index) => (
                    <li key={cartItem.product.id + index}>
                      <div>
                        <p>size: selected{cartItem.selectedSize}</p>
                        <p>color: selected{cartItem.selectedColor}</p>
                        <p>color: selected{cartItem.quantity}</p>
                        <strong>{cartItem.product.title}</strong> -{' '}
                        {cartItem.product.price}
                      </div>
                      <div>
                        <Button
                          secondary
                          onClick={() =>
                            context.removeProductFromCart(cartItem.product.id)
                          }
                        >
                          Remove from Cart
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </main>
            </div>
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    </GlobalState>
  );
}
