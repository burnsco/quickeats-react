import LoginForm from "@components/common/forms/LoginOrRegisterForm"
import onSubmitLogin from "@components/common/forms/submitLogin"

export default function LoginPage() {
  return <LoginForm onSubmit={onSubmitLogin} />
}
