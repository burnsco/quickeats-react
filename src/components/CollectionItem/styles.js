import styled from '@xstyled/styled-components'
import CustomButton from '../CustomButton'

export const CardContainer = styled.div`
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-bottom: 10px;
  min-width: 15rem;
  :hover {
    button {
      opacity: 0.8;
    }
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 540px) {
    margin: 0;
    margin-top: 20px;
    padding: 0;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  min-width: 15rem;
  background-size: cover;
  background-position: center;
`
export const Footer = styled.div`
  font-family: 'Raleway', sans-serif;
  width: 100%;
  flex-direction: column;
  display: flex;
  font-size: 16px;
`

export const NamePriceContainer = styled.h5`
  display: flex;
  justify-content: space-between;
`
export const Name = styled.div`
  margin-left: 20px;
`
export const Price = styled.div`
  margin-right: 10px;
`
export const AddItemButton = styled(CustomButton)`
  font-family: 'Open Sans', sans-serif;
  align-self: flex-end;
  width: 100%;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  border: none;
`
