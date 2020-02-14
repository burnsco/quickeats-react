import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/blackcat.svg'
import { auth } from '../../firebase/utils'
import { selectCartHidden } from '../../redux/selectors/cart'
import { selectCurrentUser } from '../../redux/selectors/user'
import CartDropDown from '../CartDropDown'
import CartIcon from '../CartIcon'
import {
  Container,
  LogoContainer,
  LogoTitle,
  NavContainer,
  NavLink,
  SignOutLink
} from './index.styled'

const Header = ({ currentUser, hidden }) => (
  <Container>
    <LogoContainer>
      <Logo style={{ height: 80 + 'px', width: 80 + 'px' }} />
      <LogoTitle>
        QUIK <span style={{ color: 'red' }}>EATS</span>
      </LogoTitle>
    </LogoContainer>

    <NavContainer>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/shop">SHOP</NavLink>
      {currentUser ? (
        <SignOutLink onClick={() => auth.signOut()}>SIGN OUT</SignOutLink>
      ) : (
        <NavLink to="/signin">SIGN IN</NavLink>
      )}
      <CartIcon />
    </NavContainer>
    {hidden ? null : <CartDropDown />}
  </Container>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
