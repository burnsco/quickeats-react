import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const NavContainerStyles = css`
  font-size: 1em;
  cursor: pointer;
  padding: 10px 25px;
  letter-spacing: 1px;

  &:hover {
    border-bottom: 1px solid black;
    border-width: thick;
  }
`
const Container = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;
`
const LogoContainer = styled.div`
  margin-left: 10px;
  height: 100%;
  display: flex;
`
const LogoTitle = styled.h1`
  font-family: 'Staatliches', cursive;
  margin-bottom: 10px;
`
const NavContainer = styled.nav`
  margin-right: 10px;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const NavLink = styled(Link)`
  ${NavContainerStyles}
`
const SignOutLink = styled.div`
  ${NavContainerStyles}
`

export {
  NavLink,
  NavContainer,
  LogoContainer,
  Container,
  SignOutLink,
  LogoTitle
}
