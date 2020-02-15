import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/CheckoutItem'
import StripeButton from '../../components/StripeButton'
import { selectCartItems, selectCartTotal } from '../../redux/selectors/cart'
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  ButtonContainer
} from './styles.js'

const Checkout = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer style={{ paddingLeft: 15 + 'px' }}>
        <span>Qty.</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span style={{ paddingLeft: 5 + 'px' }}>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>

    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <ButtonContainer>
      {' '}
      <StripeButton price={total} />
    </ButtonContainer>
  </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
