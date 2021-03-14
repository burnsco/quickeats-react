import RegisterForm from "@components/common/forms/LoginOrRegisterForm"
import onSubmitRegister from "@components/common/forms/submitRegister"

function RegisterPage() {
  return <RegisterForm onSubmit={onSubmitRegister} />
}

export default RegisterPage
