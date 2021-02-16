import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  SimpleGrid,
  useToast
} from "@chakra-ui/react"
import Container from "@components/container"
import firebaseAdmin from "@config/firebaseAdmin"
import { useCart } from "@hooks/cart/cart"
import "firebase/firestore"
import { InferGetServerSidePropsType } from "next"
import Image from "next/image"

export const getServerSideProps = async () => {
  const db = firebaseAdmin.firestore()
  const collections = db.collection("collections")
  const burgerDoc = await collections.doc("Burgers").get()

  if (!burgerDoc.exists) {
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      },
      props: {} as never
    }
  }
  return {
    props: {
      data: burgerDoc.data()
    }
  }
}

const AuthenticatedPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { dispatch } = useCart()
  const toast = useToast()
  const handleAddItem = (item: CartItem) =>
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
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
        qty: -1
      }
    })

  return (
    <Container>
      <h1>{props?.data?.title}</h1>
      <h2>items : </h2>
      <Container>
        <SimpleGrid columns={[2, 3]} spacing={4}>
          {props?.data?.items.map((item: any) => (
            <Box
              key={item.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box pos="relative" maxW="sm" h="260px">
                <Image
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                  src={`/${props?.data?.routeName}/${item.id}`}
                  alt={`image-${item.title}`}
                />
              </Box>
              <Box p="2">
                <Box d="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
                  </Badge>

                  <Box
                    ml={2}
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {item.name}
                  </Box>
                </Box>

                <Box py={2}>${item.price}</Box>
                <ButtonGroup size="lg" spacing={6}>
                  <Button
                    size="sm"
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
                    Add Item
                  </Button>

                  <Button size="sm" onClick={() => handleRemoveItem(item)}>
                    Remove Item
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  )
}

export default AuthenticatedPage
