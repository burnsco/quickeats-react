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

  it("Renders NavMenu + Current Page Displayed", async () => {
    const { getByText, getByRole } = render(<h1>testing header</h1>)
    expect(getByText(/shop/i)).toBeInTheDocument()
    expect(getByRole("button", { name: "Sushi" })).toBeInTheDocument()
  })

  it("Renders Cart", async () => {
    const { getByRole } = render(<h1>testing header</h1>)
    expect(getByRole("button", { name: "0" })).toBeInTheDocument()
  })

  it("toggle dark mode", async () => {
    const { getByLabelText, debug } = render(<h1>testing header</h1>)
    expect(getByLabelText("Switch to dark mode")).toBeInTheDocument()
    debug()
  })
})
