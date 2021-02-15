import { ChakraProvider, theme } from "@chakra-ui/react"
import { AuthProvider } from "@hooks/auth"
import { CartProvider } from "@hooks/cart/cart"
import Navbar from "@layout/nav-container"
import type { AppProps } from "next/app"
import Head from "next/head"
import type { FC } from "react"

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <AuthProvider>
        <ChakraProvider theme={theme}>
          <CartProvider>
            <Navbar />
            <Layout pageProps={pageProps}>
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
        </ChakraProvider>
      </AuthProvider>
    </>
  )
}
export default MyApp
