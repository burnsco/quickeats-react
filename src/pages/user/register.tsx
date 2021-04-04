import RegisterForm from "@components/common/forms/LoginOrRegisterForm"
import onSubmitRegister from "@components/common/forms/submitRegister"

export default function RegisterPage() {
  return <RegisterForm onSubmit={onSubmitRegister} />
}
