import { ChakraProvider, theme } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { FC, useEffect } from "react"
import { AuthProvider } from "../hooks/auth"

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove("loading")
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </AuthProvider>
    </>
  )
}
export default MyApp
