import React from "react"
import "react-animation/dist/keyframes.css"
import { connect } from "react-redux"
import { Image } from "cloudinary-react"
import { toast } from "react-toastify"
import { addItemToCart } from "../../redux/actions/cart"
import { ShoppingCart } from "@styled-icons/feather"
import {
  AddItemButton,
  CardContainer,
  Footer,
  Name,
  NamePriceContainer,
  Price,
} from "./styles"

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
            addItemToCart({ routeName, ...item })
            toast(`Added ${item.name} to cart`)
          }}
        >
          <strong></strong>
          ADD TO CART{" "}
          <span style={{ marginLeft: "5px" }}>
            <ShoppingCart size="1.2em" />
          </span>
        </AddItemButton>
      </Footer>
    </CardContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
