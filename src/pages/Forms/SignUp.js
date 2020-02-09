import React from 'react'
import './SignUpStyles.scss'
import {auth, createUserProfileDocument} from '../../firebase/utils'
import FormInput from '../../components/FormInput'
import CustomButton from '../../components/CustomButton'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = e => {
    const {name, value} = e.target

    this.setState({[name]: value})
  }

  handleSubmit = async event => {
    event.preventDefault()

    const {displayName, email, password, confirmPassword} = this.state

    if (password !== confirmPassword) {
      alert('passwords dont match')
      return
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, {displayName})

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>

        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={displayName}
            required
          />
          <FormInput
            label="Email"
            type="email"
            onChange={this.handleChange}
            name="email"
            value={email}
            required
          />
          <FormInput
            label="Password"
            type="password"
            onChange={this.handleChange}
            name="password"
            value={password}
            required
          />
          <FormInput
            label="Confirm Password"
            type="password"
            onChange={this.handleChange}
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
