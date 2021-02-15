export const addItemToCart = (state: State, cartItemToAdd: CartItem) => {
  const existingCartItem = state.cartItems.find(
    item => item.id === cartItemToAdd.id
  )

  if (!existingCartItem) {
    return [state.cartItems, { cartItemToAdd }]
  }

  return [
    state.cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, qty: item.qty + 1 }
        : { ...item }
    )
  ]
}

export const removeItemFromCart = (
  state: State,
  cartItemToRemove: CartItem
) => {
  const existingCartItem = state.cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem && existingCartItem.qty === 1) {
    return state.cartItems.filter(
      cartItem => cartItem.id !== cartItemToRemove.id
    )
  }

  return [
    state.cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.qty - 1 }
        : cartItem
    )
  ]
}
