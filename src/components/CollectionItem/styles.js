import styled from 'styled-components'
import CustomButton from '../CustomButton'

export const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-bottom: 10px;
  min-width: 15rem;
  :hover {
    button {
      opacity: 0.8;
      display: flex;
    }
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 540px) {
    margin: 0;
    margin-top: 20px;
    padding: 0;
  }
`
// export const ImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   height: 300px;
//   min-width: 15rem;
//   background-size: cover;
//   background-position: center;
// `
export const Footer = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  flex-direction: column;
  display: flex;
  font-size: 16px;
`

export const NamePriceContainer = styled.h5`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
`
export const Name = styled.div`
  margin-left: 20px;
`
export const Price = styled.div`
  margin-right: 10px;
`
export const ImageContainer = styled.div`
  max-height: 80%;
`
export const CardImage = styled.picture`
  width: 100%;
  height: 100%;
`
export const AddItemButton = styled(CustomButton)`
  width: 100%;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  border: 1px solid grey;
`
