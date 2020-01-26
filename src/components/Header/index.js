import React from 'react'
import { Link } from '@reach/router'

export const Header = () => (
  <nav>
    <Link to="/">Home</Link> |<Link to="/hats">hats</Link> |
    <Link to="/jackets">jackets</Link> |<Link to="/sneakers">sneakers</Link> |
    <Link to="/womens">womens</Link> |<Link to="/mens">mens</Link> |
  </nav>
)
