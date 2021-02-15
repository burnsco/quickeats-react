import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
  useDisclosure
} from "@chakra-ui/react"
import { useCart } from "@hooks/cart/cart"
import { motion } from "framer-motion"
import { useRef } from "react"
import { FaShoppingBasket } from "react-icons/fa"

const MotionButton = motion.custom(Button)

function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { state } = useCart()

  const getTotalQty = () => {
    if (state?.cartItems && state.cartItems.length > 0) {
      return state?.cartItems?.map(item => item.qty).reduce((a, b) => a + b)
    }
    return "No Items"
  }
  const getTotalPrice = () => {
    if (state?.cartItems && state.cartItems.length > 0) {
      return state?.cartItems?.map(item => item.price).reduce((a, b) => a + b)
    }
    return "No Items"
  }
  const btnRef = useRef<HTMLButtonElement | null>(null)

  const total = getTotalQty()
  const totalPrice = getTotalPrice()
  return (
    <>
      <MotionButton
        rightIcon={<FaShoppingBasket />}
        variant="outline"
        size="md"
        whileHover={{ scale: 1.2 }}
        ref={btnRef}
        onClick={onOpen}
      >
        {total}
      </MotionButton>
      <Drawer
        size="lg"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart!</DrawerHeader>
          <DrawerBody>
            <List>
              {state?.cartItems.map(item => (
                <ListItem>
                  QTY: {item.qty} NAME: {item.name} PRICE: ${item.price}
                </ListItem>
              ))}
              <ListItem>
                TOTAL QTY {total} TOTAL PRICE ${totalPrice}
              </ListItem>
            </List>
          </DrawerBody>
          <DrawerFooter>
            <ButtonGroup>
              <Button variant="outline" mr={3} onClick={onClose}>
                Checkout
              </Button>
              <Button variant="outline" mr={3} onClick={onClose}>
                Clear Cart
              </Button>
            </ButtonGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CartDrawer
