import React from 'react'
import {connect} from 'react-redux'
import {Image} from 'cloudinary-react'
import {
  clearItemFromCart,
  addItemToCart,
  removeItem,
} from '../../redux/actions/cart'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './styles.js'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem, category}) => {
  const {name, price, quantity, id, routeName} = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image
          dpr="auto"
          responsive
          responsiveUseBreakpoints="true"
          cloudName="dmztdsduf"
          publicId={`${routeName}/${id}.jpg`}
        />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItemToCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
