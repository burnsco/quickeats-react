import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/selectors/cart'

import './styles.scss'
import CheckoutItem from '../../components/CheckoutItem'
import StripeButton from '../../components/StripeButton'

const CheckOut = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem cartItem={item} key={item.id} />
    ))}
    <div className="footer">
      <div className="total">TOTAL: ${total}</div>
      <StripeButton price={total} />
      <div className="test-number">
        *Please use the following for test payments* 4242 4242 4242 4242 - Exp:
        02/2020 CW: 123
      </div>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOut)
