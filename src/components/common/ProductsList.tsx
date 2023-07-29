import { chakra, Container } from "@chakra-ui/react"
import ProductCard from "@components/common/ProductCard"
import "firebase/firestore"

export default function ProductsList(props: any) {
  const { data } = props
  const { items } = data
  const { routeName } = props.data

  return (
    <Container maxW="xxl" mt="3rem">
      <chakra.section
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(230px, 1fr))"
        gap="20px"
        className="simple-grid-shop"
      >
        {items.map((item: any, i: number) => (
          <ProductCard
            as="aside"
            key={`product-${item}-${i}`}
            item={item}
            routeName={routeName}
          />
        ))}
      </chakra.section>
    </Container>
  )
}
