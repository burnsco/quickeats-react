import React from 'react'

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  CartItemName,
} from './styles.js'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt={name} />
    <ItemDetailsContainer>
      <CartItemName>{name}</CartItemName>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default React.memo(CartItem)
