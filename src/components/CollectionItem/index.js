import React from 'react'
import { animations } from 'react-animation'
import 'react-animation/dist/keyframes.css'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { addItemToCart } from '../../redux/actions/cart'
import {
  AddItemButton,
  CardContainer,
  Footer,
  ImageContainer,
  Name,
  NamePriceContainer,
  Price
} from './styles'

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item
  return (
    <CardContainer>
      <ImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <AddItemButton
          style={{ animation: animations.popIn }}
          invertedOrange
          onClick={() => {
            addItemToCart(item)
            toast(`Added ${item.name} to cart`)
          }}
        >
          <strong>ADD TO CART</strong>
        </AddItemButton>
      </ImageContainer>
      <Footer>
        <NamePriceContainer>
          <Name>{name}</Name> <Price>${price}</Price>
        </NamePriceContainer>
      </Footer>
    </CardContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
