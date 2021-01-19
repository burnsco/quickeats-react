import Link from "next/link"
import React, { useState } from "react"
import firebaseClient from "../config/firebaseClient"

export default function Login(_props: any) {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  return (
    <div>
      <Link href="/">Go back to home page</Link>
      <br />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="Password"
      />
      <button
        type="submit"
        onClick={async () => {
          await firebaseClient
            .auth()
            .createUserWithEmailAndPassword(email, pass)
          window.location.href = "/"
        }}
      >
        Create account
      </button>
      <button
        type="submit"
        onClick={async () => {
          await firebaseClient.auth().signInWithEmailAndPassword(email, pass)
          window.location.href = "/"
        }}
      >
        Log in
      </button>
    </div>
  )
}
