import React from 'react'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/selectors/shop'
import CollectionItem from '../CollectionItem'
import {Container, Title, CollectionItems} from './styles'

const Category = ({collection}) => {
  const {title, items} = collection
  return (
    <Container>
      <Title>{title}</Title>
      <CollectionItems>
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </CollectionItems>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(Category)
