import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../CustomButton'
import './styles.scss'
import { createStructuredSelector } from 'reselect'
import CartItem from '../CartItem'
import { selectCartItems } from '../../redux/selectors/cart'
import { Link } from '@reach/router'
import { toggleCartHidden } from '../../redux/actions/cart'

export const CartDropDown = ({ cartItems, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <div className="button">
      <Link to="/checkout">
        <CustomButton onClick={() => dispatch(toggleCartHidden())}>
          Go to Checkout
        </CustomButton>
      </Link>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown)
