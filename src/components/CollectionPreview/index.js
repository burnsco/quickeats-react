import React from 'react'

import CollectionItem from '../CollectionItem'

import './styles.scss'

const CollectionPreview = ({ items, title }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)

export default CollectionPreview
