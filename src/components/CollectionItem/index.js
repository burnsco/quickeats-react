import React from 'react'
import {connect} from 'react-redux'

import CustomButton from '../CustomButton'
import {addItemToCart} from '../../redux/actions/cart'

import './styles.scss'

const CollectionItem = ({item, addItemToCart}) => {
  const {name, price, imageUrl} = item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        onClick={() => addItemToCart(item)}
        className="custom-button"
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
