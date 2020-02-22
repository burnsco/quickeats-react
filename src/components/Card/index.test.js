import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  CardContainer,
  CardImage,
  CardContentContainer,
  CardTitle,
  CardTitleContainer
} from './styles'
import { shallow } from 'enzyme'

test('CardContainer renders without crashing', () => {
  shallow(<CardContainer />)
})
test('CardImage renders without crashing', () => {
  shallow(<CardImage />)
})
test('CardContentContainer renders without crashing', () => {
  shallow(<CardContentContainer />)
})
test('CardTitleContainer renders without crashing', () => {
  shallow(<CardTitleContainer />)
})
test('CardTitle renders without crashing', () => {
  shallow(<CardTitle />)
})
