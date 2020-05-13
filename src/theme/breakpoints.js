import {css} from 'styled-components'

export const GridWrapperMixin = css`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const GridMixin = css`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media only screen and (min-width: 20em) {
    grid-row-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  @media only screen and (min-width: 30em) {
    grid-row-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  @media only screen and (min-width: 48em) {
    grid-gap: 5px;
    grid-row-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  @media only screen and (min-width: 62em) {
    margin-right: 3em;
    margin-right: 3em;
    grid-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media only screen and (min-width: 75em) {
    margin-left: 5em;
    margin-right: 5em;
    grid-gap: 25px;
    grid-row-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  @media only screen and (min-width: 112em) {
    margin-top: 2em;
    margin-left: 4em;
    margin-right: 4em;
    grid-gap: 15px;
    grid-row-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
`
