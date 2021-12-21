import React from 'react';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import styles from './empty-cart.module.scss';

export type EmptyCartProps = {};

export function EmptyCart({}: EmptyCartProps) {
  return <Text>No products in Cart</Text>;
}
