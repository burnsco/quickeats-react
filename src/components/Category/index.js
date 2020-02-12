import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/selectors/shop'
import CollectionItem from '../CollectionItem'
import { CollectionsWrapper, Title, CollectionItems } from './styles'

const Category = ({ collection }) => {
  let { items, title } = collection
  return (
    <CollectionsWrapper>
      <Title>{title}</Title>
      <CollectionItems>
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </CollectionItems>
    </CollectionsWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(Category)
