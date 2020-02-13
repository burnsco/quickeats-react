import styled from 'styled-components'

const CardContainer = styled.figure`
  --primary-color: #e6dada;
  --secondary-color: #274046;
  --image-opacity: 0.1;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  margin-bottom: 10px;
  min-width: 15rem;
  @media (max-width: 540px) {
    margin: 0;
    padding: 0;
  }
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
  CardTitleContainer
}
