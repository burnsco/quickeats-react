import React from 'react'
import {
  NavLink,
  NavContainer,
  LogoContainer,
  LogoTitle,
  Container,
  SignOutLink
} from './index.styled'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/blackcat.svg'
import {createStructuredSelector} from 'reselect'
import {auth} from '../../firebase/utils'
import CartIcon from '../CartIcon'
import CartDropDown from '../CartDropDown'
import {selectCurrentUser} from '../../redux/selectors/user'
import {selectCartHidden} from '../../redux/selectors/cart'

const Header = ({currentUser, hidden}) => (
  <Container>
    <LogoContainer>
      <Logo style={{height: 80 + 'px', width: 80 + 'px'}} />
      <LogoTitle>
        QUIK <span style={{color: 'red'}}>EATS</span>
      </LogoTitle>
    </LogoContainer>

    <NavContainer>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/shop">SHOP</NavLink>
      {currentUser ? (
        <SignOutLink onClick={() => auth.signOut()}>SIGN OUT</SignOutLink>
      ) : (
        <NavLink to="/forms">SIGN IN</NavLink>
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
