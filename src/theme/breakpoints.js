import { css } from 'styled-components'

export const GridWrapperMixin = css`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const GridMixin = css`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

  @media only screen and (min-width: 20em) {
    grid-row-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
  @media only screen and (min-width: 30em) {
    grid-row-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  }
  @media only screen and (min-width: 48em) {
    grid-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  }
  @media only screen and (min-width: 62em) {
    grid-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  }
  @media only screen and (min-width: 75em) {
    grid-gap: 25px;
    grid-row-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  }
  @media only screen and (min-width: 112em) {
    grid-gap: 25px;
    grid-row-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
  }
`
