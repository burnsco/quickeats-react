import { createGlobalStyle } from 'styled-components'

// Do flex box with no margins or padding for mobile
// then do grid for higher res

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.pageBackground}
  }
`

export default GlobalStyle
