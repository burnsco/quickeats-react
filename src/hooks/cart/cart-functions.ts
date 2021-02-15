export const addItemToCart = (
  state: State,
  cartItemToAdd: CartItem
): CartItem[] => {
  const cartItemExists = state.cartItems.find(
    item => item.id === cartItemToAdd.id
  )
  if (!cartItemExists) {
    return [...state.cartItems, cartItemToAdd]
  }
  if (state.cartItems.length > 0) {
    return [
      ...state.cartItems.map(item =>
        item.id !== cartItemToAdd.id
          ? { ...item }
          : {
              ...item,
              qty: item.qty + 1
            }
      )
    ]
  }
  return [...state.cartItems, cartItemToAdd]
}

export const removeItemFromCart = (
  state: State,
  cartItemToRemove: CartItem
): CartItem[] => {
  const cartItemExists = state.cartItems.find(
    item => item.id === cartItemToRemove.id
  )
  if (cartItemExists && cartItemExists.qty === 0) {
    return [...state.cartItems.filter(item => item.id !== cartItemToRemove.id)]
  }

  if (state.cartItems.length > 0) {
    return [
      ...state.cartItems.map(item =>
        item.id !== cartItemToRemove.id
          ? { ...item }
          : {
              ...item,
              qty: item.qty - 1
            }
      )
    ]
  }
  return [...state.cartItems]
}
