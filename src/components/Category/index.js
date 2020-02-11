import React from 'react'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/selectors/shop'

import './styles.scss'
import CollectionItem from '../CollectionItem'

const Category = ({collection}) => {
  const {title, items} = collection
  return (
    <div className="category">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(Category)
