import { Container, SimpleGrid } from "@chakra-ui/react"
import ProductAddToCart from "@components/common/ProductAddToCart"
import "firebase/firestore"

export default function ProductsList(props: any) {
  const { data } = props
  const { items } = data
  const { routeName } = props.data
  console.log("productslist")
  console.log(props)

  return (
    <Container maxW="xxl" mt="3rem">
      <SimpleGrid
        className="simple-grid-shop"
        columns={[1, 2, 3]}
        spacing={4}
        w="full"
      >
        {items.map((item: any) => {
          return (
            // <ProductCard
            //   key={`product-${item}`}
            //   item={item}
            //   routeName={routeName}
            // />
            <ProductAddToCart key={item.id} />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}
