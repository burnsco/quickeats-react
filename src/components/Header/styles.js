import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Container = styled.header`
  position: sticky;
  z-index: 10;
  margin-bottom: 3em;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #ebedf0;
  height: 60px;
  background-color: #ffffff;
`

const HeaderLink = styled(NavLink)`
  cursor: pointer;
`
const SignOutLink = styled.div``

export { Container, SignOutLink }
