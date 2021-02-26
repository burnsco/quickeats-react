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

function RegisterDrawer() {
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <Button variant="outline" size="sm" ref={btnRef} onClick={onOpen}>
        Register
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
          <DrawerHeader>Register</DrawerHeader>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values, { setErrors }) => {
              try {
                await firebaseClient
                  .auth()
                  .createUserWithEmailAndPassword(values.email, values.password)
                toast({
                  id: "success-singing-in",
                  title: `Congrats!`,
                  description: "You were signed in successfully.",
                  status: "success",
                  duration: 3000,
                  isClosable: true
                })
              } catch (ex) {
                const errorCode = ex.code
                const errorMessage = ex.message
                if (errorCode === "auth/weak-password") {
                  setErrors({
                    password: "weak password, try again."
                  })
                } else {
                  setErrors({
                    email: `${errorMessage}`
                  })
                }
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
                      type="password"
                      label="Password"
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

export default RegisterDrawer
