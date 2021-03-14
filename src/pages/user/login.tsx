import LoginForm from "@components/common/forms/LoginOrRegisterForm"
import onSubmitLogin from "@components/common/forms/submitLogin"

function LoginPage() {
  return <LoginForm onSubmit={onSubmitLogin} />
}

export default LoginPage
