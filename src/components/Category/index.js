import React from 'react'
import {animations} from 'react-animation'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/selectors/shop'
import CollectionItem from '../CollectionItem'
import {CategoryWrapper, CollectionItems, Title} from './styles'

const Category = ({collection: {items, title}, match}) => {
  return (
    <CategoryWrapper style={{animation: animations.fadeIn}}>
      <Title>{title}</Title>
      <br />
      <CollectionItems>
        {items.map((item) => (
          <CollectionItem
            item={item}
            key={item.id}
            routeName={match.params.category}
          />
        ))}
      </CollectionItems>
    </CategoryWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.category)(state),
})

export default connect(mapStateToProps)(Category)
