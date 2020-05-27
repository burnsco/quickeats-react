import {createSelector} from 'reselect'

// takes whole state and returns a slice of it
const selectUser = (state) => state.user

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
)
