import { Button, Heading, Stack } from "@chakra-ui/react"
import ChakraField from "@components/common/ChakraField"
import Container from "@components/layout/container"
import firebaseClient from "@config/firebaseClient"
import { Form, Formik } from "formik"
import Link from "next/link"

export default function Login() {
  return (
    <Container mt={5}>
      <Heading>Login Page</Heading>
      <Link href="/">Go back to home page</Link>
      <br />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async values => {
          await firebaseClient
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password)
          window.location.href = "/"
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={4}>
              <ChakraField id="email" name="email" type="email" label="Email" />
              <ChakraField
                id="password"
                name="password"
                label="Password"
                type="password"
              />
            </Stack>
            <Button
              type="submit"
              isDisabled={isSubmitting}
              isLoading={isSubmitting}
              color="blue"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
