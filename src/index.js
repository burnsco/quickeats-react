import React from 'react'
import {render} from 'react-dom'

import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'

import './index.css'
import './css/izmir.min.css'
import App from './App'

render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
