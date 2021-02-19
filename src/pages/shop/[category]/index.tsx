import { AddIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  SimpleGrid,
  useToast
} from "@chakra-ui/react"
import firebaseAdmin from "@config/firebaseAdmin"
import { sections } from "@config/site-sections"
import { useCart } from "@hooks/cart/cart"
import "firebase/firestore"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"

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
        routeName: item.routeName,
        qty: 1
      }
    })

  return (
    <Container maxW="xxl" p={[0, null, 4, 6]}>
      <SimpleGrid
        className="simple-grid-shop"
        columns={[1, 2, 3]}
        spacing={4}
        w="full"
      >
        {props?.data?.items.map((item: any) => (
          <Box
            key={item.id}
            maxW="md"
            borderWidth="1px"
            borderRadius="md"
            shadow="md"
            _hover={{
              shadow: "lg"
            }}
            overflow="hidden"
          >
            <Box pos="relative" maxW="sm" h="260px">
              <Image
                priority
                layout="fill"
                objectFit="cover"
                src={`/${props?.data?.routeName}/${item.id}`}
                alt={`image-${item.title}`}
              />
            </Box>
            <Box p={4}>
              <HStack>
                <Badge borderRadius="full" px="2" colorScheme="purple">
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
                colorScheme="telegram"
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

export default AuthenticatedPage
