type State = {
  cartItems: CartItem[]
}

type CartItem = {
  id: number
  name: string
  price: number
  qty: number
  routeName: string
}

type ProductDataType = {
  data: {
    id: number
    items: {
      id: number
      name: string
      price: number
    }[]
    routName: string
    title: string
  }
}

type ActionType =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: CartItem }
