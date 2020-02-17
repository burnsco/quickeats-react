import ShopActionTypes from '../types/shop'
import SHOP_DATA from '../../pages/Shop/data'

const INITIAL_STATE = {
  collections: SHOP_DATA,
  isFetching: false,
  errorMessage: undefined
}

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collections: action.payload }
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload }
    default:
      return state
  }
}
