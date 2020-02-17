import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import FormInput from '../../components/FormInput'
import { auth, signInWithGoogle } from '../../firebase/utils.js'
import {
  ButtonsBarContainer,
  CreateAccountLink,
  SignInContainer,
  WelcomePage
} from './styles'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = event => {
    const { value, name } = event.target
    if (name === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  return (
    <WelcomePage>
      <SignInContainer>
        <h1>Welcome back</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit" style={{ width: 100 + '%' }}>
              {' '}
              Sign in with email{' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
        <br />
        <CustomButton
          style={{ fontFamily: 'Raleway' }}
          onClick={signInWithGoogle}
          isGoogleSignIn
        >
          Sign in with Google
        </CustomButton>
        <CreateAccountLink style={{ alignSelf: 'center' }} to="/signup">
          Create an Account
        </CreateAccountLink>
      </SignInContainer>
    </WelcomePage>
  )
}

export default SignIn
