import ReactDOM, {render} from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
