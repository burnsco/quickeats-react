import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/selectors/shop'
import CollectionPreview from '../CollectionPreview'

import styled from '@xstyled/styled-components'
const Container = styled.section``

const CollectionsOverview = ({ collections }) => {
  return (
    <Container>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview {...otherCollectionProps} key={id} />
      ))}
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
