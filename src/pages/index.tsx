import fetchAllProducts from "@utils/getAllProducts"
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

  function renderFoodTypesMenu() {
    return Object.keys(props.products).map((item: string) => (
      <h2
        className="text-4xl font-bold hover:text-indigo-600"
        onClick={() => {
          setFoodType(item)
        }}
        key={`fp-menu-${item}`}
      >
        {item}
      </h2>
    ))
  }

  function renderFoodTypesGrid() {
    return props.products[foodType].items.map((item: any) => (
      <a
        className="flex relative max-w-md h-[120px]"
        href={`/shop/${props.products[foodType].routeName}`}
        key={`fp-gallery-image-${item.id}`}
      >
        <Image
          priority
          layout="fill"
          objectFit="cover"
          src={`/${props.products[foodType].routeName}/${item.id}`}
          alt={`${item.name}`}
        />
      </a>
    ))
  }

  return (
    <article className="flex container p-2">
      <nav className="p-1 mr-2 border-2 flex flex-col justify-evenly">
        {renderFoodTypesMenu()}
      </nav>

      <div className="container p-2 border-2">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:px-5">
          {renderFoodTypesGrid()}
        </div>
      </div>
    </article>
  )
}
