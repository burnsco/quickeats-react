import React from 'react'
import {render} from 'react-dom'

import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'

import './index.css'
import App from './App'

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
