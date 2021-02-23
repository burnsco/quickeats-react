import "@testing-library/jest-dom"
import { render } from "@utils/testUtils"

const useRouter = jest.spyOn(require("next/router"), "useRouter")

describe("Header (navbar)", () => {
  useRouter.mockImplementation(() => ({
    route: "/shop/[category]",
    pathname: "/shop/[category]",
    query: { category: "sushi" },
    asPath: "/shop/sushi"
  }))
  it("Renders logo", async () => {
    const { getByTestId } = render(<h1>testing header</h1>)
    expect(getByTestId("nav-logo")).toBeInTheDocument()
  })

  it("Renders NavMenu", async () => {
    const { getByText } = render(<h1>testing header</h1>)
    expect(getByText(/shop/i)).toBeInTheDocument()
  })

  it("Renders Cart", async () => {
    const { getByText } = render(<h1>testing header</h1>)
    expect(getByText(/0/i)).toBeInTheDocument()
  })

  it("toggle dark mode", async () => {
    const { getByTestId } = render(<h1>testing header</h1>)
    expect(getByTestId("nav-logo")).toBeInTheDocument()
  })
})
