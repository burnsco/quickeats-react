import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer
} from "react"

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
  if (action.type === "ADD_ITEM") {
    // check for existing product
    const copyOfCartItems = [...state.cartItems]
    const existingCartItem = copyOfCartItems.find(
      item => item.id === action.payload.id
    )

    // if not existing product was found
    if (!existingCartItem) {
      return {
        cartItems: [
          ...state.cartItems,
          {
            id: action.payload.id,
            qty: action.payload.qty,
            price: action.payload.price,
            name: action.payload.name
          }
        ]
      }
    }
    // if an existing product was found
    if (existingCartItem) {
      console.log(state)
      console.log(existingCartItem)
      existingCartItem.qty++
      return {
        cartItems: [...copyOfCartItems]
      }
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const copyOfCartItems = [...state.cartItems]
    const existingCartItem = copyOfCartItems.find(
      item => item.id === action.payload.id
    )

    // if not existing product was found
    if (!existingCartItem) {
      return {
        cartItems: [...state.cartItems]
      }
    }

    if (existingCartItem) {
      console.log(state)
      console.log(existingCartItem)
      existingCartItem.qty--
      if (existingCartItem.qty === 0) {
        return {
          cartItems: [
            ...copyOfCartItems.filter(item => item.id !== existingCartItem.id)
          ]
        }
      }
      return {
        cartItems: [...copyOfCartItems]
      }
    }
  }

  return {
    cartItems: state.cartItems
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
