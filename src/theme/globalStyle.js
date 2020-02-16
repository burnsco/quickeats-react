import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  line-height: 1.6125;
  overflow-x: initial;
  min-height: 100%;
  padding-bottom: 30px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  color: black;
}
`
