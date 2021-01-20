import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useEffect,
  useReducer
} from "react"

const CartContext = createContext<{
  items: [] | null
  dispatch: Dispatch<any> | null
}>({
  items: null,
  dispatch: null
})

const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: action.item.id,
          title: action.item.title,
          quantity: action.item.quantity
        }
      ]
    case "REMOVE_ITEM":
      return state.filter((item: any) => item.id !== action.id)
    default:
      return state
  }
}

const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [items, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("items")
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <CartContext.Provider value={{ items, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
