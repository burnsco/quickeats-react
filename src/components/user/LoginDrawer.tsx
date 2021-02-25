import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
  useToast
} from "@chakra-ui/react"
import ChakraField from "@components/common/ChakraField"
import firebaseClient from "@config/firebaseClient"
import { Form, Formik } from "formik"
import { useRef } from "react"

function LoginDrawer() {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <Button variant="outline" size="sm" ref={btnRef} onClick={onOpen}>
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Login</DrawerHeader>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values, { setErrors }) => {
              try {
                await firebaseClient
                  .auth()
                  .signInWithEmailAndPassword(values.email, values.password)
                toast({
                  id: "success",
                  title: `Congrats`,
                  description: "You you were signed in successfully.",
                  status: "success",
                  duration: 3000,
                  isClosable: true
                })
              } catch (ex) {
                console.log(ex)
                setErrors({
                  email: "email and/or password not correct",
                  password: "or not available. try again"
                })
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <DrawerBody>
                  <Stack spacing={4}>
                    <ChakraField
                      id="email"
                      name="email"
                      type="email"
                      label="Email"
                    />

                    <ChakraField
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                    />
                  </Stack>
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    isDisabled={isSubmitting}
                    isLoading={isSubmitting}
                    color="blue"
                  >
                    Submit
                  </Button>
                </DrawerFooter>
              </Form>
            )}
          </Formik>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default LoginDrawer
