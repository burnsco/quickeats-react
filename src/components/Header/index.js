import React from 'react'
import { Link } from '@reach/router'

export const Header = () => (
  <nav>
    <Link to="/">Home</Link> |<Link to="/shop">Shop</Link> |
  </nav>
)
