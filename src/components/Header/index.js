import React from 'react'
import {Link} from '@reach/router'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {createStructuredSelector} from 'reselect'
import {auth} from '../../firebase/utils'
import './styles.scss'
import CartIcon from '../CartIcon'
import CartDropDown from '../CartDropDown'
import {selectCurrentUser} from '../../redux/selectors/user'
import {selectCartHidden} from '../../redux/selectors/cart'

const Header = ({currentUser, hidden}) => {
  return (
    <div className="header">
      <div className="logo-container">
        <Logo />
      </div>

      <nav className="options">
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="/shop">
          SHOP
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
