import React, { lazy, Suspense } from 'react'
import ErrorBoundary from './components/Error/ErrorBoundary'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/actions/user'
import { Router, navigate } from '@reach/router'
import { auth, createUserProfileDocument } from './firebase/utils'

import Header from './components/Header'
const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Forms = lazy(() => import('./pages/Forms'))
const Checkout = lazy(() => import('./pages/Checkout'))

class App extends React.Component {
  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        await userRef.onSnapshot(async snapShot => {
          await setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          await navigate('/')
        })
      } else {
        await setCurrentUser(userAuth)
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
              <Shop path="/shop">
                {/* <Hats path="hats" />
                <Jackets path="jackets" />
                <Sneakers path="sneakers" />
                <Womens path="womens" />
                <Mens path="mens" /> */}
              </Shop>
              <Checkout path="/checkout" />
            </Router>
          </Suspense>
        </ErrorBoundary>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
