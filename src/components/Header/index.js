import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/selectors/cart'
import { selectCurrentUser } from '../../redux/selectors/user'
import Logo from './Logo/index'

const Container = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  margin-bottom: 3em;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #ebedf0;
  height: 40px;
  background-color: #ffffff;
`

const Header = ({ currentUser, hidden }) => (
  <Container>
    <Logo />
  </Container>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
