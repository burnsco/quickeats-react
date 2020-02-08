import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../redux/selectors/shop'

import './styles.scss'
import CollectionItem from '../../components/CollectionItem'

const Category = ({collections, category}) => {
  let filtered = collections.filter(items => items.routeName === category)
  return (
    <div className="category">
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="items">
        {filtered[0].items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(Category)
