import ReactDOM, {render} from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
