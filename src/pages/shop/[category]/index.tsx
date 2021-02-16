import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  SimpleGrid,
  useToast
} from "@chakra-ui/react"
import Container from "@components/container"
import PageContainer from "@components/page-container"
import firebaseAdmin from "@config/firebaseAdmin"
import { useCart } from "@hooks/cart/cart"
import "firebase/firestore"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"

const sections = [
  { id: "home-section", name: "home", href: "/" },
  { id: "burgers-section", name: "burgers", href: "/shop/burgers" },
  { id: "chicken-section", name: "chicken", href: "/shop/chicken" },
  { id: "pizza-section", name: "pizza", href: "/shop/pizza" },
  { id: "shop-section", name: "shop", href: "/shop/" },
  { id: "sushi-section", name: "sushi", href: "/shop/sushi" },
  { id: "sandwiches-section", name: "sandwiches", href: "/shop/sandwiches" }
]

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const collectionTitle =
    params.category.charAt(0).toUpperCase() + params.category.slice(1)
  const db = firebaseAdmin.firestore()
  const collections = db.collection("collections")
  const collectionDoc = await collections.doc(collectionTitle).get()

  if (!collectionDoc.exists) {
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
      data: collectionDoc.data()
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sections.map(section => `/shop/${section.name}`)

  return {
    paths,
    fallback: "blocking"
  }
}

const AuthenticatedPage = (props: any) => {
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
    <PageContainer>
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
                    ${item.price}
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

                <ButtonGroup size="lg" spacing={6} mt={4}>
                  <Button
                    leftIcon={<AddIcon />}
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

                  <Button
                    rightIcon={<MinusIcon />}
                    size="sm"
                    onClick={() => handleRemoveItem(item)}
                  >
                    Remove Item
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </PageContainer>
  )
}

export default AuthenticatedPage
