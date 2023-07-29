import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "@components/Header/"
import { CartProvider } from "@hooks/cart/cart"
import { render, RenderOptions } from "@testing-library/react"
import Router from "next/router"
import { createContext } from "react"
import theme from "../theme"

const RouterContext = createContext(Router)

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <RouterContext.Provider value={Router}>
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Navbar />
        {children}
      </CartProvider>
    </ChakraProvider>
  </RouterContext.Provider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }
