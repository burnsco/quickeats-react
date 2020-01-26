import React from 'react'

import './styles.scss'

export const CollectionPreview = items => {
  console.log(items)
  return (
    <div>
      <h3>{items.title}</h3>
      <p>
        {items.items.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </p>
    </div>
  )
}
