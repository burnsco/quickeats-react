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

type ActionType =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: CartItem }
