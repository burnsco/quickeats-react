import React from 'react'
import {withRouter} from 'react-router-dom'
import {
  CardContainer,
  CardImage,
  CardContentContainer,
  CardTitle,
  CardTitleContainer,
} from './styles'

const Card = ({title, imageUrl, history, linkUrl, match}) => (
  <CardContainer
    className="c4-izmir c4-border-bottom-left c4-image-rotate-right c4-gradient-bottom-right"
    tabIndex="0"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <CardImage src={imageUrl} alt={title} />
    <CardContentContainer className="c4-layout-bottom-left">
      <CardTitleContainer className="c4-reveal-right c4-delay-100">
        <CardTitle className="c4-izmir-title">{title.toUpperCase()}</CardTitle>
      </CardTitleContainer>
    </CardContentContainer>
  </CardContainer>
)

export default withRouter(Card)
