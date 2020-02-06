import React from 'react'
import { Link } from '@reach/router'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import { auth } from '../../firebase/utils'

import './styles.scss'
import CartIcon from '../CartIcon'
import { CartDropDown } from '../CartDropDown'

const Header = ({ currentUser, hidden }) => {
  return (
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
        {currentUser ? (
          <Link className="option" to="/forms" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/forms">
            SIGN IN
          </Link>
        )}

        <CartIcon className="option" />
      </nav>
      {hidden ? null : <CartDropDown />}
    </div>
  )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header)
