import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer
} from "react"
import { addItemToCart, removeItemFromCart } from "./cart-functions"

const initialState: State = {
  cartItems: []
}

const CartContext = createContext<{
  state: State | null
  dispatch: Dispatch<ActionType>
}>({
  state: initialState,
  dispatch: () => null
})

function reducer(state: State, action: ActionType): State {
  console.log(state)
  switch (action.type) {
    case "ADD_ITEM":
      return {
        cartItems: addItemToCart(state, action.payload)
      }
    case "REMOVE_ITEM":
      return {
        cartItems: removeItemFromCart(state, action.payload)
      }

    default:
      return state
  }
}

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
