import LoginForm from "@components/common/forms/LoginOrRegisterForm"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { fireEvent, render, screen, waitFor } from "@utils/test-utils"

const useRouter = jest.spyOn(require("next/router"), "useRouter")

describe("Header (navbar)", () => {
  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "/",
    asPath: "/"
  }))

  it("Renders `nav-logo`", async () => {
    render(<h1>testing</h1>)
    expect(screen.getByTestId("nav-logo")).toBeInTheDocument()
  })

  it("Renders `Cart`", async () => {
    render(<h1>testing</h1>)
    expect(screen.getByRole("button", { name: "0" })).toBeInTheDocument()
  })

  it("Toggle `dark mode` button in nav", async () => {
    render(<h1>testing</h1>)
    expect(screen.getByLabelText("Switch to dark mode")).toBeInTheDocument()
  })

  it("Renders `Register` button/drawer", async () => {
    render(<h1>testing</h1>)
    expect(screen.getByRole("button", { name: "Register" })).toBeInTheDocument()
  })

  it("Renders `Login` button/drawer", async () => {
    render(<h1>testing</h1>)
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument()
  })

  it("clicking on Register opens drawer to registration and displays form", async () => {
    const user = userEvent.setup()

    render(<h1>testing</h1>)

    const RegisterButton = screen.getByRole("button", { name: "Register" })
    await user.click(RegisterButton)

    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
  })

  it("clicking on Login opens drawer to registration and displays form", async () => {
    render(<h1>testing</h1>)

    const user = userEvent.setup()

    const RegisterButton = screen.getByRole("button", { name: "Login" })
    await user.click(RegisterButton)

    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
  })

  it("Login/Register form displays and calls with correct DATA", async () => {
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit} />)

    const emailInput = screen.getByLabelText("Email")
    const passwordInput = screen.getByLabelText("Password")
    const submitButton = screen.getByRole("button", { name: "Submit" })
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
