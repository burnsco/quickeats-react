import React from 'react'
import { Link } from '@reach/router'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './styles.scss'

export const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Logo />
    </div>

    <nav className="options">
      <Link className="option" to="/">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/shop">
        SIGN IN
      </Link>
      <Link className="option" to="/cart">
        ((Cart))
      </Link>
    </nav>
  </div>
)
