import React from 'react'
import {animations} from 'react-animation'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/actions/cart'
import {selectCartItems} from '../../redux/selectors/cart'
import CartItem from '../CartItem'
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
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
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
