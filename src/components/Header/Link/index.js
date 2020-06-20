import styled from '@xstyled/styled-components'
import {NavLink} from 'react-router-dom'

const HeaderNavLink = styled(NavLink)`
  font-size: 14rpx;
  font-weight: 600;
  letter-spacing: 0.5rpx;
  @media (min-width: 1024px) {
    font-size: 16rpx;
  }
  cursor: pointer;
  &:hover {
    color: grey;
  }
`

export default HeaderNavLink
