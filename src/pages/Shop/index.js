import React, { useState } from 'react'

import SHOP_DATA from './data'

import { CollectionPreview } from '../../components/CollectionPreview'

export default function Shop() {
  const [collections] = useState(SHOP_DATA)

  return (
    <div className="shop-page">
      <h2>Collections</h2>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview {...otherCollectionProps} key={id} />
      ))}
    </div>
  )
}
