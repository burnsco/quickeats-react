import { Button, Input } from "@chakra-ui/react"
import Container from "@components/container"
import { NextChakraLink } from "@components/next-chakra-link"
import firebaseClient from "@config/firebaseClient"
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  return (
    <Container mt={5}>
      <NextChakraLink href="/">Go back to home page</NextChakraLink>
      <br />
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="Password"
      />
      <Button
        type="submit"
        onClick={async () => {
          await firebaseClient
            .auth()
            .createUserWithEmailAndPassword(email, pass)
          window.location.href = "/"
        }}
      >
        Create account
      </Button>
      <Button
        type="submit"
        onClick={async () => {
          await firebaseClient.auth().signInWithEmailAndPassword(email, pass)
          window.location.href = "/"
        }}
      >
        Log in
      </Button>
    </Container>
  )
}
