import React from 'react'
import {CustomButtonContainer} from './Container'

import './styles.scss'

const CustomButton = props => (
  <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
)

export default CustomButton
