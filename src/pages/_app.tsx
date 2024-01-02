import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "@components/Header"
import { AuthProvider } from "@hooks/auth"
import { CartProvider } from "@hooks/cart/cart"
import type { AppProps } from "next/app"
import Head from "next/head"
import "../globals.css"
import theme from "../theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>QuickEats Food Delivery</title>
      </Head>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <CartProvider>
            <Navbar />
            <main className="container pt-[10rem]">
              <Component {...pageProps} />
            </main>
          </CartProvider>
        </ChakraProvider>
      </AuthProvider>
    </>
  )
}
