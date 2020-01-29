import React from 'react'
import { Link } from '@reach/router'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import { auth } from '../../firebase/utils'

import './styles.scss'
import CartIcon from '../CartIcon'
import { CartDropDown } from '../CartDropDown'

const Header = ({ currentUser }) => {
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

        <Link className="option" to="/cart">
          <CartIcon />
        </Link>
      </nav>
      <CartDropDown />
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
