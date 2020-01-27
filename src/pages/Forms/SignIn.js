import React, { useState } from 'react'
import FormInput from '../../components/FormInput'
import { CustomButton } from '../../components/CustomButton'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setEmail('')
    setPassword('')
    console.log('submit')
  }

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  return (
    <div style={{ width: 30 + 'vw' }} className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          handleChange={handleChange}
          type="email"
          value={email}
          required
        />

        <FormInput
          label="password"
          name="password"
          handleChange={handleChange}
          type="password"
          value={password}
          required
        />

        <CustomButton type="submit" label="submit" />
      </form>
    </div>
  )
}

export default SignIn
