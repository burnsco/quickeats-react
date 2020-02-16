import React from 'react'
import { animations } from 'react-animation'
import { withRouter } from 'react-router-dom'
import CollectionItem from '../CollectionItem'
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './styles'

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer style={{ animation: animations.fadeIn }}>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        <br />
        {title}
      </TitleContainer>

      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview)
