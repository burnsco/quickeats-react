import React, { useState } from 'react'
import styled from '@xstyled/styled-components'
import SignIn from './SignIn'
import SignUp from './SignUp'

const WelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CreateAccountLink = styled.h3`
  color: red;
  margin-top: 50px;
  &:hover {
    text-decoration: underline;
  }
`

const Forms = () => {
  const [signIn, setSignIn] = useState(true)
  const toggle = () => setSignIn(!signIn)
  return (
    <WelcomePage>
      {signIn ? <SignIn /> : <SignUp />}

      {signIn && (
        <CreateAccountLink onClick={toggle} style={{ color: 'red' }}>
          Create an Account
        </CreateAccountLink>
      )}
    </WelcomePage>
  )
}

export default Forms
