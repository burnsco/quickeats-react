import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

const CardContainer = styled.figure`
  --primary-color: #f12711;
  --secondary-color: #f5af19;
  --image-opacity: 0.1;
  cursor: pointer;
  margin: 10px;
  margin-bottom: 10px;
  min-width: 15rem;
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
const ContentContainer = styled.figcaption`
  padding: 5px 15px;
  /* justify-content: center;
  align-items: center;
  justify-items: space-evenly;
  display: flex; */
`
const Title = styled.h3`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`

const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  height: 100%;
`

const Card = ({title, imageUrl, history, linkUrl, match}) => (
  <CardContainer
    className="c4-izmir c4-border-bottom-left c4-image-rotate-right c4-gradient-bottom-right"
    tabIndex="0"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    {/* <ImageContainer
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></ImageContainer> */}

    <Image src={imageUrl} />

    <ContentContainer className="c4-layout-bottom-left">
      <div className="c4-reveal-right c4-delay-100">
        <Title className="c4-izmir-title">{title.toUpperCase()}</Title>
      </div>
    </ContentContainer>
  </CardContainer>
)

export default withRouter(Card)
