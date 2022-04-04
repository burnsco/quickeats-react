import { Button, Center, Stack } from "@chakra-ui/react"
import ChakraField from "@components/common/ChakraField"
import { sleepytime } from "@utils/sleepy-time"
import { Form, Formik } from "formik"

function LoginOrRegisterForm({ onSubmit }: any) {
  const handleSubmit = async (values: any, actions: any) => {
    await sleepytime(500)
    onSubmit(values, actions)
  }

  return (
    <Center p={2}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form>
            <Stack spacing={4}>
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
            </Stack>

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
    </Center>
  )
}

export default LoginOrRegisterForm
