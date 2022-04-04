import { Container, SimpleGrid } from "@chakra-ui/react"
import ProductCard from "@components/common/ProductCard"
import "firebase/firestore"

export default function ProductsList(props: any) {
  const { data } = props
  const { items } = data
  const { routeName } = props.data

  return (
    <Container maxW="xxl" mt="3rem">
      <SimpleGrid
        className="simple-grid-shop"
        columns={[1, 2, 3]}
        spacing={4}
        w="full"
      >
        {items.map((item: any) => (
          <ProductCard
            key={`product-${item}`}
            item={item}
            routeName={routeName}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}
