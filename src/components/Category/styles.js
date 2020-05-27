import styled from '@xstyled/styled-components'
import {GridMixin} from '../../theme/breakpoints'

export const CategoryWrapper = styled.section`
  display: flex;
  align-self: auto;
  margin-right: 1em;
  margin-left: 1em;
  flex-direction: column;
`
export const Title = styled.h2`
  margin: 0 auto;
  padding-top: 20px;
  font-size: 38px;
  font-family: 'Raleway', sans-serif;
`
export const CollectionItems = styled.div`
  ${GridMixin}
`
