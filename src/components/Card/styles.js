import styled from '@xstyled/styled-components'

const CardContainer = styled.figure`
  --primary-color: #e6dada;
  --secondary-color: #274046;
  cursor: pointer;
`
const CardContentContainer = styled.figcaption`
  padding: 5px 15px;
`
const CardTitle = styled.h3`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`
const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const CardTitleContainer = styled.div``

export {
  CardImage,
  CardTitle,
  CardContentContainer,
  CardContainer,
  CardTitleContainer,
}
