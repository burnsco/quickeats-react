import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "@components/Header"
import PageContainer from "@components/layout/page-container"
import { AuthProvider } from "@hooks/auth"
import { CartProvider } from "@hooks/cart/cart"
import type { AppProps } from "next/app"
import Head from "next/head"
import type { FC } from "react"
import theme from "../theme"

const Noop: FC = ({ children }) => <>{children}</>

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap;text=QuickEats"
          rel="stylesheet"
        />
      </Head>

      <AuthProvider>
        <ChakraProvider theme={theme}>
          <CartProvider>
            <Navbar />
            <Layout pageProps={pageProps}>
              <PageContainer>
                <Component {...pageProps} />
              </PageContainer>
            </Layout>
          </CartProvider>
        </ChakraProvider>
      </AuthProvider>
    </>
  )
}
