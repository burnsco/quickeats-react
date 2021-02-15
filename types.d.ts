type State = {
  cartItems: CartItem[]
}

type CartItem = {
  id: number
  name: string
  price: number
  qty: number
}

type ActionType =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: CartItem }
