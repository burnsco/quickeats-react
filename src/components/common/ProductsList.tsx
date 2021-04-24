import { AddIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  SimpleGrid,
  useColorModeValue,
  useToast
} from "@chakra-ui/react"
import { useCart } from "@hooks/cart/cart"
import "firebase/firestore"
import Image from "next/image"

export default function ProductsList(props: any) {
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
    <Container maxW="xxl" mt="3rem">
      <SimpleGrid
        className="simple-grid-shop"
        columns={[1, 2, 3]}
        spacing={4}
        w="full"
      >
        {props?.data?.items.map((item: any) => (
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
                src={`/${props?.data?.routeName}/${item.id}`}
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
                  isTruncated
                >
                  {item.name}
                </Box>
              </HStack>
              <Button
                size="sm"
                spacing={6}
                w="full"
                colorScheme="purple"
                mt={4}
                leftIcon={<AddIcon />}
                mr="-px"
                onClick={() => {
                  handleAddItem(item)
                  toast({
                    title: `${item.name}`,
                    description: "Was added to your cart.",
                    status: "success",
                    duration: 2000,
                    isClosable: true
                  })
                }}
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}
