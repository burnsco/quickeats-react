import { LockIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  Tbody,
  Td,
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

function CartDrawer() {
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
      return state?.cartItems?.map(item => item.price).reduce((a, b) => a + b)
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
        variant="outline"
        size="md"
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
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>QTY</Th>
                    <Th>ITEM(S)</Th>
                    <Th isNumeric>PRICE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cartItems?.map(item => (
                    <Tr>
                      <Td>
                        <NumberInput
                          size="xs"
                          maxW={14}
                          defaultValue={item.qty || 0}
                          min={0}
                          max={20}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Td>
                      <Td>{item.name}</Td>
                      <Td isNumeric>${item.price}</Td>
                    </Tr>
                  ))}
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
            <ButtonGroup spacing={10}>
              <Button onClick={onClose}>Exit</Button>
              <Button
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
