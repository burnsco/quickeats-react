import React from 'react'

import SignIn from './SignIn'
import SignUp from './SignUp'

import {FormsPageContainer} from './styles.js'

const Forms = () => (
  <FormsPageContainer>
    <SignIn />
    <SignUp />
  </FormsPageContainer>
)

export default Forms
