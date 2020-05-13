import styled from '@xstyled/styled-components'
import {NavLink} from 'react-router-dom'

const HeaderNavLink = styled(NavLink)`
  font-size: 16rpx;
  font-weight: 600;
  letter-spacing: 0.5rpx;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid red;
  }
`

export default HeaderNavLink
