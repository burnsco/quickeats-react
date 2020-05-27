import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap');
body {
  padding: 0;
  margin: 0;
  line-height: 1.6125;
  overflow-x: initial;
  min-height: 100%;
  padding-bottom: 30px;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
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
