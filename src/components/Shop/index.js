import React, { useState } from 'react'
import SHOP_DATA from './data'
import { CollectionPreview } from '../CollectionPreview'

export default function Shop() {
  const [data] = useState(SHOP_DATA)
  return (
    <div className="shop-page">
      <h1>Shop Component</h1>
      <hr />
      {data.map(items => (
        <CollectionPreview {...items} key={items.id} />
      ))}
    </div>
  )
}
