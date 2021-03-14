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
import onSubmitRegister from "@components/common/forms/submitRegister"
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
            onSubmit={async (values, actions) => {
              const response = await onSubmitRegister(values, actions)
              if (response && response.user && response.user.email) {
                toast({
                  id: "success-registering",
                  title: `Congrats!`,
                  description: "You are registered and signed in!",
                  status: "success",
                  duration: 3000,
                  isClosable: true
                })
              }
              return null
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
