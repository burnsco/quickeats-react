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
import { useRouter } from "next/router"
import { useRef } from "react"
import PasswordField from "../common/PasswordField"

function RegisterDrawer() {
  const router = useRouter()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const toast = useToast()

  const btnRef = useRef<HTMLButtonElement | null>(null)

  // TODO make a google sign in option
  // const handleRegularRegister = () => {},
  // const handleGoogleRegister = async () => {}

  return (
    <>
      <Button ref={btnRef} size="md" colorScheme="blue" onClick={onOpen}>
        Register
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
          <DrawerHeader>Join the Community!</DrawerHeader>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async values => {
              try {
                await firebaseClient
                  .auth()
                  .createUserWithEmailAndPassword(values.email, values.password)

                toast({
                  id: "success",
                  title: `Welcome!`,
                  description: "Your account was created successfully.",
                  status: "success",
                  duration: 9000,
                  isClosable: true
                })
                router.push("/")
              } catch (error) {
                console.log(error)
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

                    <PasswordField
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
                  <Button type="submit" isLoading={isSubmitting} color="blue">
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
