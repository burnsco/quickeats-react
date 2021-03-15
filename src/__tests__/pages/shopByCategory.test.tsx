import ProductsList from "@components/common/ProductsList"
import singleProductData from "@data/sush-product"
import data from "@data/sushi-products"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { render } from "@utils/test-utils"

const useRouter = jest.spyOn(require("next/router"), "useRouter")

describe("Category Products Page", () => {
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

  it("Updates the QTY in the Navbar after adding an item", async () => {
    useRouter.mockImplementation(() => ({
      route: "/shop/[category]",
      pathname: "/shop/[category]",
      query: { category: "sushi" },
      asPath: "/shop/sushi"
    }))
    const { getByText, debug, getByRole } = render(
      <ProductsList {...singleProductData} />
    )

    const product = getByText(/salmon sashimi/i)
    expect(product).toBeInTheDocument()

    const addProduct = getByRole("button", { name: "Add To Cart" })
    expect(addProduct).toBeInTheDocument()

    userEvent.click(addProduct)
    userEvent.click(addProduct)
    expect(getByRole("button", { name: "2" })).toBeInTheDocument()
  })
})
