import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/selectors/cart'
import { selectCurrentUser } from '../../redux/selectors/user'
import Logo from './Logo/index'
import HeaderNavLink from './Link'

const Container = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  margin-bottom: 3em;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #ebedf0;
  height: 48px;
  background-color: #ffffff;

  @media (max-width: 425px) {
    margin-bottom: 2em;
    height: 40px;
  }
`
const Wrapper = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LogoContainer = styled.div`
  width: 25%;
  @media (min-width: 420px) {
    padding: 0 17px;
  }
`

const Header = ({ currentUser, hidden }) => (
  <Container>
    <Wrapper>
      <LogoContainer>
        {' '}
        <Logo />
      </LogoContainer>

      <HeaderNavLink to="/shop">SHOP</HeaderNavLink>
      <HeaderNavLink to="/signup">SIGN UP</HeaderNavLink>
      <HeaderNavLink to="/checkout">CART</HeaderNavLink>
    </Wrapper>
  </Container>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
