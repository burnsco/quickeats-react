import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {animations} from 'react-animation'
import CartItem from '../CartItem'
import {selectCartItems} from '../../redux/selectors/cart'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/actions/cart'
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton
} from './styles'

export const CartDropDown = ({cartItems, dispatch, history}) => (
  <CartDropdownContainer style={{animation: animations.popIn}}>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      style={{marginTop: 10 + 'px', width: 210 + 'px'}}
      disabled={cartItems.length === 0}
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      Go to Checkout
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
