import React, {lazy, Suspense} from 'react'
import styled from 'styled-components'
import ErrorBoundary from './components/Error/ErrorBoundary'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/actions/user'
import {Router, navigate} from '@reach/router'
import {auth, createUserProfileDocument} from './firebase/utils'

import Header from './components/Header'
import Footer from './components/Footer'

const Category = lazy(() => import('./pages/Category'))
const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Forms = lazy(() => import('./pages/Forms'))
const Checkout = lazy(() => import('./pages/Checkout'))

const AppContainer = styled.div`
  height: 100%;
`

class App extends React.Component {
  unSubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

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
      <AppContainer>
        <ErrorBoundary>
          <Header />

          <Suspense
            fallback={
              <div style={{marginTop: 50 + 'px', fontSize: 50 + 'px'}}>
                Loading...
              </div>
            }
          >
            <Router>
              <Home path="/" />
              <Forms path="/forms" />
              <Shop path="/shop" />
              <Category path="/shop/:category" />
              <Checkout path="/checkout" />
            </Router>
          </Suspense>
        </ErrorBoundary>
      </AppContainer>
    )
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
