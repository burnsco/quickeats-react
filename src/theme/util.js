import {css} from 'styled-components'

export const sizesPX = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1800,
}
export const sizesEM = {
  xs: 20,
  sm: 30,
  md: 48,
  lg: 62,
  xl: 75,
  xxl: 112,
}
export const media = Object.keys(sizesPX).reduce((accumulator, label) => {
  const emSize = sizesPX[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
