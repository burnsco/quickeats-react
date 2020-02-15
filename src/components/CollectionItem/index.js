import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/actions/cart'
import {
  AddItemButton,
  CardContainer,
  Footer,
  Name,
  NamePriceContainer,
  Price,
  CardImage
} from './styles'

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={name} />
      <Footer>
        <NamePriceContainer>
          <Name>{name}</Name> <Price>${price}</Price>
        </NamePriceContainer>
        <AddItemButton
          invertedOrange
          onClick={() => {
            addItemToCart(item)
          }}
        >
          <strong>ADD</strong>
        </AddItemButton>
      </Footer>
    </CardContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
