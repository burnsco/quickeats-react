import React, {lazy, Suspense} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './css/izmir.min.css'
import {createStructuredSelector} from 'reselect'
import {Normalize} from 'styled-normalize'
import ErrorBoundary from './components/Error/ErrorBoundary'
import FallBackSpinner from './components/FallBackSpinner'
import Header from './components/Header'
import {auth, createUserProfileDocument} from './firebase/utils'
import {setCurrentUser} from './redux/actions/user'
import {selectCurrentUser} from './redux/selectors/user'
import Home from './pages/Home'

const Shop = lazy(() => import('./pages/Shop'))
const SignIn = lazy(() => import('./pages/Forms/SignIn'))
const SignUp = lazy(() => import('./pages/Forms/SignUp'))
const Checkout = lazy(() => import('./pages/Checkout'))

toast.configure({autoClose: 2000, useLazyContainer: 'true'})

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
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
          <Header />
          <Switch>
            <Suspense fallback={FallBackSpinner()}>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={Shop} />
              <Route exact path="/checkout" component={Checkout} />
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
            </Suspense>
          </Switch>
        </ErrorBoundary>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
