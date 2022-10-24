import { AddIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Button,
  HStack,
  useColorModeValue,
  useToast
} from "@chakra-ui/react"
import { useCart } from "@hooks/cart/cart"
import Image from "next/image"

export default function ProductCard({ item, routeName }: any) {
  console.log("productCard", item, routeName)
  const borderColor = useColorModeValue("gray.100", "#313131")
  const hoverColor = useColorModeValue("gray.200", "gray.600")
  const bg = useColorModeValue("whitesmoke", "#202020")
  const { dispatch } = useCart()

  const toast = useToast()

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

  return (
    <Box
      bg={bg}
      borderColor={borderColor}
      key={item.id}
      maxW="md"
      borderWidth="1px"
      borderRadius="md"
      shadow="md"
      _hover={{
        boxShadow: "md",
        borderWidth: "1px",
        borderColor: hoverColor
      }}
      overflow="hidden"
    >
      <Box pos="relative" maxW="md" h="260px">
        <Image
          layout="fill"
          objectFit="cover"
          src={`/${routeName}/${item.id}`}
          alt={`image-${item.title}`}
        />
      </Box>
      <Box p={4}>
        <HStack>
          <Badge borderRadius="full" px="2" colorScheme="orange">
            ${item.price}
          </Badge>
          <Box
            ml={2}
            fontWeight="semibold"
            fontSize="md"
            as="h3"
            lineHeight="tight"
          >
            {item.name}
          </Box>
        </HStack>
        <Button
          size="sm"
          w="full"
          border="2px solid #f87060"
          mt={4}
          leftIcon={<AddIcon />}
          mr="-px"
          onClick={() => {
            handleAddItem(item)
            toast({
              status: "warning",
              title: `${item.name} was added to your cart.`,

              isClosable: true
            })
          }}
        >
          Add To Cart
        </Button>
      </Box>
    </Box>
  )
}
