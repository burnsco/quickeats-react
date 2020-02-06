import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../CustomButton'
import './styles.scss'
import CartItem from '../CartItem'

export const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropDown)
