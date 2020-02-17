import React from 'react'
import 'react-animation/dist/keyframes.css'
import { connect } from 'react-redux'
import { Image } from 'cloudinary-react'
import { toast } from 'react-toastify'
import { addItemToCart } from '../../redux/actions/cart'
import {
  AddItemButton,
  CardContainer,
  Footer,
  Name,
  NamePriceContainer,
  Price
} from './styles'

const CollectionItem = ({ item, addItemToCart, routeName }) => {
  const { name, price, id } = item
  return (
    <CardContainer>
      <Image
        dpr="auto"
        responsive
        width="352"
        height="300"
        crop="fill"
        sizes="100vw"
        responsiveUseBreakpoints="true"
        cloudName="dmztdsduf"
        publicId={`${routeName}/${id}.jpg`}
      />

      <Footer>
        <NamePriceContainer>
          <Name>{name}</Name> <Price>${price}</Price>
        </NamePriceContainer>
        <AddItemButton
          invertedOrange
          onClick={() => {
            addItemToCart(item)
            toast(`Added ${item.name} to cart`)
          }}
        >
          <strong>ADD TO CART</strong>
        </AddItemButton>
      </Footer>
    </CardContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
