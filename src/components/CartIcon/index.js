import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './styles.scss'

const CartIcon = ({ items }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{items | '1'}</span>
  </div>
)

export default CartIcon
