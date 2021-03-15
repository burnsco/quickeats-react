import LoginForm from "@components/common/forms/LoginOrRegisterForm"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { sleepytime } from "@utils/sleepy-time"
import { fireEvent, render, waitFor } from "@utils/test-utils"

const useRouter = jest.spyOn(require("next/router"), "useRouter")

describe("Header (navbar)", () => {
  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "/",
    asPath: "/"
  }))

  it("Renders `nav-logo`", async () => {
    const { getByTestId } = render(<h1>testing</h1>)
    expect(getByTestId("nav-logo")).toBeInTheDocument()
  })

  it("Renders `NavMenu` ", async () => {
    const { getByRole } = render(<h1>testing</h1>)
    expect(getByRole("button", { name: "Browse Food" })).toBeInTheDocument()
  })

  it("Renders `Cart`", async () => {
    const { getByRole } = render(<h1>testing</h1>)
    expect(getByRole("button", { name: "0" })).toBeInTheDocument()
  })

  it("Toggle `dark mode` button in nav", async () => {
    const { getByLabelText } = render(<h1>testing</h1>)
    expect(getByLabelText("Switch to dark mode")).toBeInTheDocument()
  })

  it("Renders `Register` button/drawer", async () => {
    const { getByRole } = render(<h1>testing</h1>)
    expect(getByRole("button", { name: "Register" })).toBeInTheDocument()
  })

  it("Renders `Login` button/drawer", async () => {
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

  it("Login/Register form displays and calls with correct DATA", async () => {
    const handleSubmit = jest.fn()
    const { getByRole, getByText, getByTestId, debug, getByLabelText } = render(
      <LoginForm onSubmit={handleSubmit} />
    )

    const emailInput = getByLabelText("Email")
    const passwordInput = getByLabelText("Password")
    const submitButton = getByRole("button", { name: "Submit" })
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    fireEvent.change(emailInput, {
      target: {
        value: "corey1234@gmail.com"
      }
    })
    fireEvent.change(passwordInput, {
      target: {
        value: "corey1234"
      }
    })
    fireEvent.click(submitButton)

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        {
          email: "corey1234@gmail.com",
          password: "corey1234"
        },
        expect.anything()
      )
    )
  })
})
