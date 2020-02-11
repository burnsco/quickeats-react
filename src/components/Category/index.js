import React from 'react'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/selectors/shop'

import './styles.scss'
import CollectionItem from '../CollectionItem'

const Category = ({collection, category}) => {
  let {items, title} = collection
  return (
    <div className="category">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, {category}) => ({
  collection: selectCollection(category)(state)
})

export default connect(mapStateToProps)(Category)
