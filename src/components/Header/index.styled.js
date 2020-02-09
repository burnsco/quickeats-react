import styled from 'styled-components'
import {Link} from '@reach/router'

const Container = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;
`
const LogoContainer = styled.div`
  height: 100%;
  width: 70px;
  padding: 15px;
`

const NavContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NavLink = styled(Link)`
  font-size: 14px;
  padding: 10px 25px;
  letter-spacing: 1px;

  &:hover {
    border-bottom: 1px solid black;
    border-width: thick;
  }
`

export {NavLink, NavContainer, LogoContainer, Container}
