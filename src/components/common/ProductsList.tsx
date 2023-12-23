import ProductCard from "@components/common/ProductCard"
import "firebase/firestore"

export default function ProductsList(props: any) {
  const { data } = props
  const { items } = data
  const { routeName } = props.data

  return (
    <article className="container">
      <section className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {items.map((item: any, i: number) => (
          <ProductCard
            key={`product-${item}-${i}`}
            item={item}
            routeName={routeName}
          />
        ))}
      </section>
    </article>
  )
}
