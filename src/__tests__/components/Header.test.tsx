import LoginForm from "@components/common/forms/LoginOrRegisterForm"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { render, waitFor } from "@utils/test-utils"
import { sleepytime } from "../../utils/sleepy-time"

const useRouter = jest.spyOn(require("next/router"), "useRouter")

const testUser = {
  email: "testuser@testing.com",
  password: "testuser123"
}

describe("Header (navbar)", () => {
  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "/",
    asPath: "/"
  }))

  it("Renders logo", async () => {
    const { getByTestId } = render(<h1>testing</h1>)
    expect(getByTestId("nav-logo")).toBeInTheDocument()
  })

  it("Renders NavMenu ", async () => {
    const { getByRole } = render(<h1>testing</h1>)
    expect(getByRole("button", { name: "Browse Food" })).toBeInTheDocument()
  })

  it("Renders Cart", async () => {
    const { getByRole } = render(<h1>testing</h1>)
    expect(getByRole("button", { name: "0" })).toBeInTheDocument()
  })

  it("toggle dark mode", async () => {
    const { getByLabelText } = render(<h1>testing</h1>)
    expect(getByLabelText("Switch to dark mode")).toBeInTheDocument()
  })

  it("renders Register button/drawer", async () => {
    const { getByRole } = render(<h1>testing</h1>)
    expect(getByRole("button", { name: "Register" })).toBeInTheDocument()
  })

  it("renders Login button/drawer", async () => {
    const { getByRole } = render(<h1>testing</h1>)
    expect(getByRole("button", { name: "Login" })).toBeInTheDocument()
  })

  it("clicking on Register opens drawer to registration and displays form", async () => {
    const { getByRole, debug, getByLabelText } = render(<h1>testing</h1>)
    const RegisterButton = getByRole("button", { name: "Register" })
    userEvent.click(RegisterButton)
    sleepytime(1000)
    expect(getByLabelText("Email")).toBeInTheDocument()
    expect(getByLabelText("Password")).toBeInTheDocument()
  })

  it("clicking on Login opens drawer to registration and displays form", async () => {
    const { getByRole, debug, getByLabelText } = render(<h1>testing</h1>)
    const RegisterButton = getByRole("button", { name: "Login" })
    userEvent.click(RegisterButton)
    sleepytime(1000)
    expect(getByLabelText("Email")).toBeInTheDocument()
    expect(getByLabelText("Password")).toBeInTheDocument()
  })

  it("Login Input Fields Display", async () => {
    const { getByRole, getByText, getByTestId, debug, getByLabelText } = render(
      <h1>testing</h1>
    )
    const RegisterButton = getByRole("button", { name: "Login" })
    userEvent.click(RegisterButton)

    sleepytime(1000)

    const emailInput = getByLabelText("Email")
    const passwordInput = getByLabelText("Password")
    const submitButton = getByRole("button", { name: "Submit" })
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it("figure out how to get login working later", async () => {
    const handleSubmit = jest.fn()
    const { getByRole, getByText, getByTestId, debug, getByLabelText } = render(
      <LoginForm onSubmit={handleSubmit} />
    )

    await waitFor(() => {
      userEvent.type(getByLabelText(/email/i), "frank@gmail.com")
      userEvent.type(getByLabelText(/passwordl/i), "frank123")
    })
    await waitFor(() => {
      userEvent.click(getByRole("button", { name: /submit/i }))
    })
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        email: "frank@gmail.com",
        password: "frank123"
      },
      expect.anything()
    )
  })
})
