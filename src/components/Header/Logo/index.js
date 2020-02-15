import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoContainer = styled(Link)`
  font-weight: 500;
`
const LogoTitle = styled.span`
  font-size: 2em;
  font-family: 'Staatliches', cursive;
`
const Logo = () => (
  <LogoContainer to="/">
    <LogoTitle>
      {' '}
      QUIK<span style={{ color: 'red' }}>EATS</span>
    </LogoTitle>
  </LogoContainer>
)

export default Logo
