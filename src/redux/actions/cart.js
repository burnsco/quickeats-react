export const toggleCartHidden = () => ({
  type: 'TOGGLE_CART_HIDDEN',
})

export const addItemToCart = (item) => ({
  type: 'ADD_ITEM_TO_CART',
  payload: item,
})

export const clearItemFromCart = (item) => ({
  type: 'CLEAR_ITEM_FROM_CART',
  payload: item,
})

export const removeItem = (item) => ({
  type: 'REMOVE_ITEM',
  payload: item,
})
