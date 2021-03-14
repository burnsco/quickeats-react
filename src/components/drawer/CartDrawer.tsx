import { LockIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VisuallyHidden
} from "@chakra-ui/react"
import { useCart } from "@hooks/cart/cart"
import React, { useRef } from "react"
import { FaShoppingBasket } from "react-icons/fa"
import { useAuth } from "../../hooks/auth"

function CartDrawer() {
  const { dispatch } = useCart()
  const { user } = useAuth()

  const handleAddItem = (item: CartItem) =>
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        routeName: item.routeName,
        qty: 1
      }
    })
  const handleRemoveItem = (item: CartItem) =>
    dispatch({
      type: "REMOVE_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        routeName: item.routeName,
        qty: -1
      }
    })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { state } = useCart()

  const getTotalQty = () => {
    if (state?.cartItems && state.cartItems.length > 0) {
      return state?.cartItems?.map(item => item.qty).reduce((a, b) => a + b)
    }
    return "0"
  }
  const getTotalPrice = () => {
    if (state?.cartItems && state.cartItems.length > 0) {
      return state?.cartItems
        ?.map(item => item.price * item.qty)
        .reduce((a, b) => a + b)
    }
    return "0"
  }
  const btnRef = useRef<HTMLButtonElement | null>(null)

  const totalQty = getTotalQty()
  const totalPrice = getTotalPrice()

  const cartItems = state?.cartItems

  // #TODO  ADD routName to the cart so that can retreive image url for items section

  return (
    <>
      <Button
        rightIcon={<FaShoppingBasket />}
        colorScheme="orange"
        border="2px"
        variant="outline"
        size="sm"
        mr={2}
        ref={btnRef}
        onClick={onOpen}
      >
        {totalQty}
      </Button>
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
          <DrawerHeader>SHOPPING CART</DrawerHeader>
          <DrawerBody>
            <Box
              borderWidth="2px"
              borderStyle="dashed"
              borderRadius="lg"
              overflow="hidden"
              p={1}
            >
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th ml="5">QTY</Th>
                    <Th>ITEM(S)</Th>
                    <Th isNumeric>PRICE (each)</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cartItems && cartItems.length > 0 ? (
                    cartItems?.map(item => (
                      <Tr key={`Cart-Item-${item.name}`}>
                        <Td>
                          <HStack maxW="80px">
                            <Button
                              size="xs"
                              onClick={() => handleAddItem(item)}
                            >
                              +
                            </Button>
                            <Text>{item.qty}</Text>

                            <Button
                              size="xs"
                              onClick={() => handleRemoveItem(item)}
                            >
                              -
                            </Button>
                          </HStack>
                        </Td>
                        <Td>
                          <HStack spacing={2}>
                            <Text>{item.name}</Text>
                            <Box
                              borderRadius="full"
                              fontSize="10px"
                              px="2"
                              colorScheme="red"
                            >
                              REMOVE
                            </Box>
                          </HStack>
                        </Td>

                        <Td isNumeric>${item.price}</Td>
                      </Tr>
                    ))
                  ) : (
                    <Center p={5}>Cart Is Empty.</Center>
                  )}
                </Tbody>
                {totalPrice > 0 ? (
                  <Tfoot>
                    <Tr>
                      <Th>Total: {totalQty}</Th>
                      <VisuallyHidden>
                        <Th>ITEMS</Th>
                      </VisuallyHidden>
                      <Th isNumeric>Total: ${totalPrice}</Th>
                    </Tr>
                  </Tfoot>
                ) : null}
              </Table>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            {!user ? "please login/register" : null}
            <ButtonGroup spacing={10}>
              <Button onClick={onClose}>Exit</Button>
              <Button
                disabled={!user}
                leftIcon={<LockIcon />}
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                Checkout
              </Button>
            </ButtonGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CartDrawer
