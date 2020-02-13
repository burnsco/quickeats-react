import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

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
const ContentContainer = styled.figcaption`
  padding: 5px 15px;
`
const Title = styled.h3`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`
const Image = styled.img`
  object-fit: cover;
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
