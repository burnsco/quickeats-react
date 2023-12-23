import { useToast } from "@chakra-ui/react"
import { useCart } from "@hooks/cart/cart"
import Image from "next/legacy/image"

export default function ProductCard({ item, routeName }: any) {
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
    <div
      className="grid max-w-screen-md rounded-md border-2 shadow-sm overflow-hidden"
      key={item.id}
    >
      <div className="relative max-w-screen-md h-[260px]">
        <Image
          layout="fill"
          objectFit="cover"
          src={`/${routeName}/${item.id}`}
          alt={`image-${item.title}`}
        />
      </div>

      {/* put a badge here later, centered */}
      <div className="flex content-center p-2">
        <div className="center">${item.price}</div>
        <h3 className="ml-2 font-semibold text-xl">{item.name}</h3>
      </div>

      <footer
        onClick={() => {
          handleAddItem(item)
          toast({
            status: "warning",
            title: `${item.name} was added to your cart.`,

            isClosable: true
          })
        }}
      >
        Add To Cart
      </footer>
    </div>
  )
}
