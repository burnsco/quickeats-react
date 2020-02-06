import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../CustomButton'
import './styles.scss'
import CartItem from '../CartItem'
import { selectCartItems } from '../../redux/selectors/cart'

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

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown)
