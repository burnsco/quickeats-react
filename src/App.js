import React, { lazy, Suspense } from 'react'
import ErrorBoundary from './components/Error/ErrorBoundary'
import { Router } from '@reach/router'
import { Header } from './components/Header'
import { auth } from './firebase/utils'

const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Forms = lazy(() => import('./pages/Forms'))

class App extends React.Component {
  state = {
    currentUser: null
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <Header currentUser={this.state.currentUser} />
          <Suspense
            fallback={
              <div style={{ marginTop: 50 + 'px', fontSize: 50 + 'px' }}>
                Loading...
              </div>
            }
          >
            <Router>
              <Home path="/" />
              <Forms path="/forms" />
              <Shop path="/shop" />
            </Router>
          </Suspense>
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
