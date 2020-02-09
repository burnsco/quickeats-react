import React from 'react'
import {Link} from '@reach/router'
import CollectionItem from '../CollectionItem'

import './styles.scss'

const CollectionPreview = ({items, title, previewOnly, routeName}) => {
  return (
    <div className="collection-preview">
      <Link to={`/shop/${routeName}`} className="link">
        <h3>
          <span className="title lined-thick">{title}</span>
        </h3>
      </Link>

      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
