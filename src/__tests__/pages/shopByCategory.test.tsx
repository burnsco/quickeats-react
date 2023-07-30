import ProductsList from "@components/common/ProductsList"
import singleProductData from "@data/sush-product"
import data from "@data/sushi-products"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@utils/test-utils"

const useRouter = jest.spyOn(require("next/router"), "useRouter")

describe("Category Products Page", () => {
  it("Renders all the products (ie. sushi)", async () => {
    useRouter.mockImplementation(() => ({
      route: "/shop/[category]",
      pathname: "/shop/[category]",
      query: { category: "sushi" },
      asPath: "/shop/sushi"
    }))
    render(<ProductsList {...data} />)

    expect(screen.getByText(/salmon sashimi/i)).toBeInTheDocument()
    expect(screen.getByText(/california roll/i)).toBeInTheDocument()
    expect(screen.getByText(/cooked ramen/i)).toBeInTheDocument()
    expect(screen.getByText(/avocado roll/i)).toBeInTheDocument()
    expect(screen.getByText(/red dragon roll/i)).toBeInTheDocument()
  })

  it("Updates the QTY in the Navbar after adding an item", async () => {
    const user = userEvent.setup()
    useRouter.mockImplementation(() => ({
      route: "/shop/[category]",
      pathname: "/shop/[category]",
      query: { category: "sushi" },
      asPath: "/shop/sushi"
    }))
    render(<ProductsList {...singleProductData} />)

    const product = screen.getByText(/salmon sashimi/i)
    expect(product).toBeInTheDocument()
    // yes it could be any product, but we know this is working properly
    const addProduct = screen.getByText("Add To Cart")
    expect(addProduct).toBeInTheDocument()

    await user.click(addProduct)
    await user.click(addProduct)

    expect(screen.getByRole("button", { name: "2" })).toBeInTheDocument()
  })
})
