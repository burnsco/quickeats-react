import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/actions/cart'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './styles.scss'

const CartIcon = ({ items }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{items | '1'}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
