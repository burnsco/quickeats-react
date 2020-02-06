import React from 'react'

import './styles.scss'
import CustomButton from '../CustomButton'

export const CollectionItem = ({ id, name, price, imageUrl }) => (
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
    <CustomButton className="custom-button" inverted>
      Add to cart
    </CustomButton>
  </div>
)
