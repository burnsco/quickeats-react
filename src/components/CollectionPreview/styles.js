import styled from '@xstyled/styled-components'
import {GridMixin, GridWrapperMixin} from '../../theme/breakpoints'

export const CollectionPreviewContainer = styled.section`
  display: flex;
  align-self: auto;
  margin-right: 1em;
  margin-left: 1em;
  flex-direction: column;
`

export const TitleContainer = styled.h1`
  margin-top: 10em;
  font-size: 34px;
  color: grey;
  font-family: 'Open Sans Condensed', sans-serif;
  margin: 0 auto 30px;
  text-decoration: underline;
  &:hover {
    font-style: italic;
  }
`
export const PreviewWrapper = styled.div`
  ${GridWrapperMixin}
`
export const PreviewContainer = styled.div`
  ${GridMixin}
`
