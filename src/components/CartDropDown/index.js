import React from 'react'
import CustomButton from '../CustomButton'

import './styles.scss'

export const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>Go to Checkout</CustomButton>
  </div>
)
