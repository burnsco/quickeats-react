import React, { lazy, Suspense } from 'react'
import ErrorBoundary from './components/Error/ErrorBoundary'
import { Router } from '@reach/router'
import { Header } from './components/Header'

const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Forms = lazy(() => import('./pages/Forms'))

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
          <Forms path="/forms" />
          <Shop path="/shop" />
        </Router>
      </Suspense>
    </ErrorBoundary>
  </div>
)

export default App
