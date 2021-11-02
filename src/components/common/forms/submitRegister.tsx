import firebaseClient from "@config/firebaseClient"

const onSubmitRegister = async (values: any, actions: any) => {
  let response
  try {
    response = await firebaseClient
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
    return response
  } catch (ex: any) {
    const errorCode = ex.code
    const errorMessage = ex.message
    if (errorCode === "auth/weak-password") {
      actions.setErrors({
        password: "weak password, try again."
      })
    } else {
      actions.setErrors({
        email: `${errorMessage}`
      })
    }
  }
  return response
}

export default onSubmitRegister
