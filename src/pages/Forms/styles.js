import { Link } from 'react-router-dom'
import styled from '@xstyled/styled-components'
import CustomButton from '../../components/CustomButton'

export const WelcomePage = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`

export const CustomSignInButtonStyles = styled(CustomButton)
export const CustomSignInButton = styled(Link)`
  ${CustomSignInButtonStyles}
`

export const FormsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`

export const SignInTitle = styled.h2`
  margin: 10px 0;
`

export const CreateAccountLink = styled(Link)`
  color: red;
  font-weight: bold;
  margin-top: 50px;
  &:hover {
    text-decoration: underline;
  }
`

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`
