import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const headerItem = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 16px;
  @media (max-width: 425px) {
    padding: 0 8px;
  }
`

const Logo = styled(Link)`
  ${headerItem}

  margin-right: auto;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;

  @media (max-width: 425px) {
    padding: 0 8px 0 16px;
    font-size: 19px;
  }
`
const LogoTitle = styled.span`
  font-family: 'Staatliches', cursive;
`
const HeaderLogo = () => (
  <Logo to="/">
    <LogoTitle>
      {' '}
      QUIK<span style={{ color: 'red' }}>EATS</span>
    </LogoTitle>
  </Logo>
)

export default HeaderLogo
