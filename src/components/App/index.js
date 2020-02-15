import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { Normalize } from 'styled-normalize'
import { auth, createUserProfileDocument } from '../../firebase/utils'
import { setCurrentUser } from '../../redux/actions/user'
import { selectCurrentUser } from '../../redux/selectors/user'
import ErrorBoundary from '../Error/ErrorBoundary'
import FallBackSpinner from '../FallBackSpinner'
import Header from '../Header'

const Home = lazy(() => import('../../pages/Home'))
const Shop = lazy(() => import('../../pages/Shop'))
const SignIn = lazy(() => import('../../pages/Forms/SignIn'))
const SignUp = lazy(() => import('../../pages/Forms/SignUp'))
const Checkout = lazy(() => import('../../pages/Checkout'))

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <Normalize />
          <Suspense fallback={FallBackSpinner()}>
            <Header />
            <Switch>
              <Route path="/shop">
                <Shop />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <SignIn />
                }
              />
              <Route
                exact
                path="/signup"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <SignUp />
                }
              />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </>
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
