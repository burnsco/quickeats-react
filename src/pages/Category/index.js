import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from '../../redux/selectors/shop'

import './styles.scss'
import CollectionPreview from '../../components/CollectionPreview'

const CollectionsOverview = ({collections, category}) => {
  const categoryCollection = collections.filter(
    item => item.routeName === category
  )
  return (
    <div className="collections-overview">
      {categoryCollection.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview {...otherCollectionProps} key={id} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
