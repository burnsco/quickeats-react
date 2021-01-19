import nookies from "nookies"
import { createContext, useContext, useEffect, useState } from "react"
import firebaseClient from "../config/firebaseClient"

const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null
})

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null)

  useEffect(() => {
    if (typeof window !== undefined) {
      ;(window as any).nookies = nookies
    }
    return firebaseClient.auth().onIdTokenChanged(async authUser => {
      if (!authUser) {
        setUser(null)
        nookies.destroy(null, "token")
        nookies.set(null, "token", "", {})
        return
      }

      const token = await authUser.getIdToken()
      setUser(authUser)
      nookies.destroy(null, "token")
      nookies.set(null, "token", token, {})
    })
  }, [])

  useEffect(() => {
    const handle = setInterval(async () => {
      const curUser = firebaseClient.auth().currentUser
      if (curUser) await curUser.getIdToken(true)
    }, 10 * 60 * 1000)
    return () => clearInterval(handle)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
