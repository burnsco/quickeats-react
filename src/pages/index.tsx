import {
  Box,
  Container,
  Heading,
  ScaleFade,
  SimpleGrid,
  useColorModeValue
} from "@chakra-ui/react"
import fetchAllProducts from "@utils/getAllProducts"
import "firebase/firestore"
import Image from "next/legacy/image"
import { useState } from "react"

export function getStaticProps() {
  const { products } = fetchAllProducts()

  if (!products) {
    return {
      notFound: true
    }
  }

  return {
    props: { products }
  }
}

export default function IndexPage(props: any) {
  const [foodType, setFoodType] = useState("Burgers")

  const colorMode = useColorModeValue("blackAlpha.700", "#FFFFFF")

  function renderFoodTypesMenu() {
    return Object.keys(props.products).map((item: string) => (
      <Heading
        onClick={() => {
          setFoodType(item)
        }}
        color={foodType === item ? `#F06449` : colorMode}
        _hover={{ color: "#F06449", cursor: "pointer" }}
        key={`fp-menu-${item}`}
      >
        {item}
      </Heading>
    ))
  }

  function renderFoodTypesGrid() {
    return props.products[foodType].items.map((item: any) => (
      <Box
        color=""
        as="a"
        href={`/shop/${props.products[foodType].routeName}`}
        key={`fp-gallery-image-${item.id}`}
        pos="relative"
        maxW="md"
        h="120px"
      >
        <ScaleFade in initialScale={0.6}>
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src={`/${props.products[foodType].routeName}/${item.id}`}
            alt={`${item.name}`}
          />
        </ScaleFade>
      </Box>
    ))
  }

  return (
    <Container
      display="flex"
      mt={[1, 4, 8]}
      flexDirection={["column", "row"]}
      maxW="xxl"
      p={0}
    >
      <Box p={1} mr={6}>
        {renderFoodTypesMenu()}
      </Box>

      <Box w="full" flex="1" p={1}>
        <SimpleGrid spacing="20px" minChildWidth="140px">
          {renderFoodTypesGrid()}
        </SimpleGrid>
      </Box>
    </Container>
  )
}
