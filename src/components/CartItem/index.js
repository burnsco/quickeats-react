import React from 'react'

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './styles.js'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem
