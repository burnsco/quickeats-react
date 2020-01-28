import React, { lazy, Suspense } from 'react'
import ErrorBoundary from './components/Error/ErrorBoundary'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/actions/user'
import { Router } from '@reach/router'
import Header from './components/Header'
import { auth, createUserProfileDocument } from './firebase/utils'

const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Forms = lazy(() => import('./pages/Forms'))

class App extends React.Component {
  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
