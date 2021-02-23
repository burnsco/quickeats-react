import ProductsList from "@components/common/ProductsList"
import "@testing-library/jest-dom"
import data from "../../data/sushi-products"
import { render } from "../../utils/testUtils"

const useRouter = jest.spyOn(require("next/router"), "useRouter")

describe("Category Products Page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ProductsList {...data} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it("Renders all the products (ie. sushi)", async () => {
    useRouter.mockImplementation(() => ({
      route: "/shop/[category]",
      pathname: "/shop/[category]",
      query: { category: "sushi" },
      asPath: "/shop/sushi"
    }))
    const { getByText } = render(<ProductsList {...data} />)

    expect(getByText(/salmon sashimi/i)).toBeInTheDocument()
    expect(getByText(/california roll/i)).toBeInTheDocument()
    expect(getByText(/cooked ramen/i)).toBeInTheDocument()
    expect(getByText(/avocado roll/i)).toBeInTheDocument()
    expect(getByText(/red dragon roll/i)).toBeInTheDocument()
  })
})
