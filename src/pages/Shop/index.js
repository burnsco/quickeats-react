import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../../components/CollectionPreview'
import { selectCollections } from '../../redux/selectors/shop'

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      <h2>Collections</h2>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview {...otherCollectionProps} key={id} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(Shop)
