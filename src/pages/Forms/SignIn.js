import React, {useState} from 'react'
import FormInput from '../../components/FormInput'
import CustomButton from '../../components/CustomButton'
import {auth, signInWithGoogle} from '../../firebase/utils.js'
import {SignInContainer, ButtonsBarContainer} from './styles'

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
    const {value, name} = event.target
    if (name === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  return (
    <SignInContainer>
      <SignInContainer>I already have an account</SignInContainer>
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
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
