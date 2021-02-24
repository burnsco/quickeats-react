import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { fetcher } from "@utils/fetcher"
import "firebase/firestore"
import Image from "next/image"
import { useState } from "react"
import useSWR from "swr"

export async function getStaticProps() {
  const products = await fetcher("/api/products")
  return { props: { products } }
}

export default function IndexPage(props: any) {
  const [foodType, setFoodType] = useState("Burgers")

  const { data } = useSWR("/api/products", fetcher, {
    initialData: props.products
  })

  function renderFoodTypesMenu() {
    return Object.keys(data).map((item: string) => (
      <Heading
        onClick={() => setFoodType(item)}
        color={foodType === item ? `#F06449` : `#FFFFFF`}
        _hover={{ color: "#F06449", cursor: "pointer" }}
        key={`fp-menu-${item}`}
      >
        {item}
      </Heading>
    ))
  }

  function renderFoodTypesGrid() {
    return data[foodType].items.map((item: any) => (
      <Box
        as="a"
        href={`/shop/${data[foodType].routeName}`}
        key={`fp-gallery-image-${item.id}`}
        pos="relative"
        maxW="md"
        h="120px"
        border="2px solid purple"
      >
        <Image
          priority
          layout="fill"
          objectFit="cover"
          src={`/${data[foodType].routeName}/${item.id}`}
          alt={`${item.name}`}
        />
      </Box>
    ))
  }

  return (
    <Container
      display="flex"
      flexDirection={["column", "row"]}
      maxW="xxl"
      border="2px solid red"
      p={0}
    >
      <Box border="2px solid orange" p="3">
        {renderFoodTypesMenu()}
      </Box>
      <Box border="2px solid white" w="full" flex="1" p={1}>
        <SimpleGrid spacing="20px" minChildWidth="140px">
          {renderFoodTypesGrid()}
        </SimpleGrid>
      </Box>
    </Container>
  )
}
