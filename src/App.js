import React, { lazy, Suspense } from 'react'
import ErrorBoundary from './components/Error/ErrorBoundary'
import { Router } from '@reach/router'
import { Header } from './components/Header'

const Home = lazy(() => import('./pages/Home'))
const Shop = ({ children }) => (
  <div>
    <h1>Shop</h1>
    <hr />
    {children}
  </div>
)
const Hats = () => <h3>Hats Page</h3>
const Jackets = () => <h3>Jackets Page</h3>
const Sneakers = () => <h3>Sneakers Page</h3>
const Womens = () => <h3>Womens Page</h3>
const Mens = () => <h3>Menms Page</h3>

const App = () => (
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
          <Shop path="shop">
            <Hats path="hats" />
            <Jackets path="jackets" />
          </Shop>
        </Router>
      </Suspense>
    </ErrorBoundary>
  </div>
)

export default App
