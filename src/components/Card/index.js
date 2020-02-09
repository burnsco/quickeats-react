import React from 'react'
import styled from 'styled-components'
import {Link} from '@reach/router'

const CardContainer = styled.div`
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-bottom: 10px;
  min-width: 15rem;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 540px) {
    margin: 0;
    padding: 0;
  }
`
const ImageContainer = styled.div`
  height: 300px;
  min-width: 15rem;
  background-size: cover;
  background-position: center;
`

const ContentContainer = styled.div`
  padding: 2px 15px;
`

const Title = styled.h3`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`

const Subtitle = styled.p`
  font-weight: lighter;
  font-size: 16px;
`

export const Card = ({title, imageUrl, linkUrl, size}) => (
  <CardContainer>
    <ImageContainer
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></ImageContainer>

    <ContentContainer>
      <Link to={linkUrl}>
        <Title>{title}</Title>
        <Subtitle>Click to Browse</Subtitle>
      </Link>
    </ContentContainer>
  </CardContainer>
)

export default Card
