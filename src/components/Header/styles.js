import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { headerItem, link, wideFont, transition } from '../../styles/helpers'

const Container = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: stretch;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #ebedf0;
  height: 48px;
  padding: 0 10vw;
  background-color: #ffffff;
  user-select: none;
  @media (max-width: 425px) {
    margin-bottom: 16px;
    height: 40px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`

const NavLink = styled(Link)`
  ${headerItem};
  ${wideFont};
  ${link};
  position: relative;
  cursor: pointer;

  ::after {
    ${transition('opacity', 'border-bottom-width')};
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
`
const SignOutLink = styled(NavLink)`
  ${headerItem}
  ${wideFont}
  ${link}
`

export { NavLink, Container, SignOutLink }
