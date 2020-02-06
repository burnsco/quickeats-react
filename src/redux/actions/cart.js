export const toggleCartHidden = () => ({
  type: 'TOGGLE_CART_HIDDEN'
})

export const addItemToCart = item => ({
  type: 'ADD_ITEM_TO_CART',
  payload: item
})
