import React from 'react'

import './styles.scss'

export const CollectionPreview = ({ items, title }) => (
  <div className="collection-preview">
    <h3 className="title">{title}</h3>
    {items
      .filter((item, index) => index < 4)
      .map(item => (
        <div key={item.id} className="preview">
          {item.name}
        </div>
      ))}
  </div>
)
