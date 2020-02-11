import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../CustomButton'
import './styles.scss'
import {createStructuredSelector} from 'reselect'
import CartItem from '../CartItem'
import {selectCartItems} from '../../redux/selectors/cart'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/actions/cart'

export const CartDropDown = ({cartItems, dispatch, history}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <div className="button">
      <CustomButton
        style={{marginTop: 10 + 'px', width: 210 + 'px'}}
        disabled={cartItems.length === 0}
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        Go to Checkout
      </CustomButton>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
