import { Badge, Box, Button, SimpleGrid, useToast } from "@chakra-ui/react"
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
        <SimpleGrid columns={[2, 3, 4]} spacing={4}>
          {props?.data?.items.map((item: any) => (
            <Box
              key={item.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Image
                    loading="lazy"
                    layout="intrinsic"
                    src={`/${props?.data?.routeName}/${item.id}`}
                    width={700}
                    height={475}
                    alt={`image-${item.title}`}
                  />

                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {item.name}
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {item.price}
                </Box>
                <Button
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
                <Button onClick={() => handleRemoveItem(item)}>
                  Remove Item
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  )
}

export default AuthenticatedPage
