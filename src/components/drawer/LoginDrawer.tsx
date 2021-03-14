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
import onSubmitLogin from "@components/common/forms/submitLogin"
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
        size="sm"
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
            onSubmit={async (values, actions) => {
              const response = await onSubmitLogin(values, actions)
              if (response && response.user && response.user.email) {
                toast({
                  id: "success-singing-in",
                  title: `Congrats!`,
                  description: "You were signed in successfully.",
                  status: "success",
                  duration: 3000,
                  isClosable: true
                })
              }
              return null
            }}
          >
            {formik => (
              <Form>
                <DrawerBody>
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
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="solid" mr={3} onClick={onClose}>
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    isDisabled={formik.isSubmitting}
                    isLoading={formik.isSubmitting}
                    colorScheme="linkedin"
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
