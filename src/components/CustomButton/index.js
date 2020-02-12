import React from 'react'
import {CustomButtonContainer} from './Container'

const CustomButton = props => (
  <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
)

export default CustomButton
