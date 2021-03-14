import firebaseClient from "@config/firebaseClient"

const onSubmitLogin = async (values: any, actions: any) => {
  let response
  try {
    response = await firebaseClient
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
    return response
  } catch (ex) {
    actions.setErrors({
      email: "email and/or password not correct",
      password: "or not available. try again"
    })
  }
  return response
}

export default onSubmitLogin
