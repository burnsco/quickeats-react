import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from '../../redux/selectors/shop'
import CollectionPreview from '../CollectionPreview'

import './styles.scss'

const CollectionsOverview = ({collections}) => {
  return (
    <div className="collections-overview">
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview {...otherCollectionProps} key={id} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
