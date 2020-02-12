import React, {lazy, Suspense} from 'react'
import ErrorBoundary from './components/Error/ErrorBoundary'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {setCurrentUser} from './redux/actions/user'
import {selectCurrentUser} from './redux/selectors/user'
import {auth, createUserProfileDocument} from './firebase/utils'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import FallBackSpinner from './components/FallBackSpinner'
import Header from './components/Header'
const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Forms = lazy(() => import('./pages/Forms'))
const Checkout = lazy(() => import('./pages/Checkout'))

toast.configure({autoClose: 2000})

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

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
      <div>
        <ErrorBoundary>
          <Header />
          <Suspense fallback={FallBackSpinner()}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={Shop} />
              <Route exact path="/checkout" component={Checkout} />
              <Route
                exact
                path="/forms"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <Forms />
                }
              />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
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
