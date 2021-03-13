import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "@components/Header/"
import { CartProvider } from "@hooks/cart/cart"
import { render, RenderOptions } from "@testing-library/react"
import theme from "../theme"

export * from "@testing-library/react"
// override render method
export { customRender as render }

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ChakraProvider theme={theme}>
    <CartProvider>
      <Navbar />
      {children}
    </CartProvider>
  </ChakraProvider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options })

export default customRender
