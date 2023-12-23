import { Button } from "@chakra-ui/react"
import ChakraField from "@components/common/ChakraField"
import { sleepytime } from "@utils/sleepy-time"
import { Form, Formik } from "formik"

function LoginOrRegisterForm({ onSubmit }: any) {
  const handleSubmit = async (values: any, actions: any) => {
    await sleepytime(500)
    onSubmit(values, actions)
  }

  return (
    <div className="p-2 flex items-center justify-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form>
            <div className="flex gap-2">
              <ChakraField
                testId="email-input"
                id="email"
                name="email"
                type="email"
                label="Email"
              />

              <ChakraField
                testId="password-input"
                id="password"
                name="password"
                label="Password"
                type="password"
              />
            </div>

            <Button
              type="submit"
              isDisabled={formik.isSubmitting}
              isLoading={formik.isSubmitting}
              colorScheme="linkedin"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginOrRegisterForm
