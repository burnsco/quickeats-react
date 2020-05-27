import React from 'react'
import {connect} from 'react-redux'
import {AnimateOnChange} from 'react-animation'
import {toggleCartHidden} from '../../redux/actions/cart'
import {createStructuredSelector} from 'reselect'

import {selectCartItemsCount} from '../../redux/selectors/cart'
import {CartContainer, ItemCountContainer, ShoppingIcon} from './styles'

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <AnimateOnChange
    animationIn="bounceIn"
    animationOut="bounceOut"
    durationOut={500}
  >
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  </AnimateOnChange>
)

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
