import React, {lazy, Suspense} from 'react'
import styled from 'styled-components'
import ErrorBoundary from './components/Error/ErrorBoundary'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {setCurrentUser} from './redux/actions/user'
import {selectCurrentUser} from './redux/selectors/user'
import {Router, navigate} from '@reach/router'
import {auth, createUserProfileDocument} from './firebase/utils'

import Header from './components/Header'
const Category = lazy(() => import('./pages/Category'))
const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Forms = lazy(() => import('./pages/Forms'))
const Checkout = lazy(() => import('./pages/Checkout'))

const AppContainer = styled.div`
  min-height: 100vh;
`

class App extends React.Component {
  unSubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          navigate('/')
        })
      }
      setCurrentUser(userAuth)
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
