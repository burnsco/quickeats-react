import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'

import logger from 'redux-logger'

import rootReducer from './reducers/index'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)
