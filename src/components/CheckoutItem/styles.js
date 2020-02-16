import styled from '@xstyled/styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 1em;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 21%;
  padding-right: 15px;

  img {
    object-fit: cover;
    width: 80%;
    height: 4rem;
  }
`

export const TextContainer = styled.span`
  width: 23%;
`

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
