import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Login from "@pages/login";
import auth from "../redux/reducers/auth";
import * as actions from "../redux/thunk/auth";

const initialState = {
  user_name: "mock username",
  token: "mocktoken",
};

const mockStore = createStore(auth, initialState);

const wrapper = ({ children }) => (
  <Provider store={mockStore}>{children}</Provider>
);
describe("Login", () => {
  it("has a Login header", () => {
    render(<Login />, { wrapper });
    const loginHeader = screen.getByRole("heading", { level: 2 });
    expect(loginHeader).toBeInTheDocument();
  });

  it("has a Login title", () => {
    render(<Login />, { wrapper });
    const loginTitle = screen.getByTestId("login-page-header").innerHTML;
    expect(loginTitle).toMatch(/login/i);
  });
  it("has a Login form", () => {
    render(<Login />, { wrapper });
    const loginForm = screen.getByRole("form");
    expect(loginForm).toBeInTheDocument();
  });

  // TESTING EMAIL INPUT

  it("has email label", () => {
    render(<Login />, { wrapper });
    const emailLabel = screen.getByText("Email");
    expect(emailLabel).toBeInTheDocument();
  });

  it("has an email input", () => {
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    expect(emailInput).toBeInTheDocument();
  });

  it("email input has type of email", () => {
    render(<Login />, { wrapper });
    const emailInputType = screen.getByRole("textbox", { name: /email/i }).type;
    expect(emailInputType).toBe("email");
  });

  it("email has correct value when entered", async () => {
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    userEvent.type(emailInput, "samah.mohamed@ibtikar.net.sa");
    await waitFor(() => {
      expect(emailInput).toHaveValue("samah.mohamed@ibtikar.net.sa");
    });
  });

  it("email fires validation when value is empty", async () => {
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    userEvent.type(emailInput, "samah");
    userEvent.clear(emailInput);
    await waitFor(() => {
      const errMsg = screen.getByTestId("email-err-msg");
      expect(errMsg).toBeInTheDocument();
    });
  });

  it("empty email validation msg is This field is required", async () => {
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    userEvent.type(emailInput, "samah");
    userEvent.clear(emailInput);
    await waitFor(() => {
      const errMsg = screen.getByText("This field is required");
      expect(errMsg).toBeInTheDocument();
    });
  });

  it("email fires validation when value is invalid", async () => {
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    userEvent.type(emailInput, "samah");
    await waitFor(() => {
      const errMsg = screen.getByTestId("email-err-msg");
      expect(errMsg).toBeInTheDocument();
    });
  });

  it("invalid email validation msg is Invalid email format", async () => {
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    userEvent.type(emailInput, "samah");
    await waitFor(() => {
      const errMsg = screen.getByText("Invalid email format");
      expect(errMsg).toBeInTheDocument();
    });
  });

  // TESTING PASSWORD INPUT
  it("has password label", () => {
    render(<Login />, { wrapper });
    const passwordLabel = screen.getByText("Password");
    expect(passwordLabel).toBeInTheDocument();
  });

  it("has a password input", () => {
    render(<Login />, { wrapper });
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
  });

  it("password input has type of password", () => {
    render(<Login />, { wrapper });
    const passwordInputType = screen.getByLabelText(/password/i).type;
    expect(passwordInputType).toBe("password");
  });

  it("password has correct value when entered", async () => {
    render(<Login />, { wrapper });
    const passwordInput = screen.getByLabelText(/password/i);
    userEvent.type(passwordInput, "123456789");
    await waitFor(() => {
      expect(passwordInput).toHaveValue("123456789");
    });
  });

  it("password fires validation when value is empty", async () => {
    render(<Login />, { wrapper });
    const passwordInput = screen.getByLabelText(/password/i);
    userEvent.type(passwordInput, "123456789");
    userEvent.clear(passwordInput);
    await waitFor(() => {
      const errMsg = screen.getByTestId("password-err-msg");
      expect(errMsg).toBeInTheDocument();
    });
  });

  it("empty password validation msg is This field is required", async () => {
    render(<Login />, { wrapper });
    const passwordInput = screen.getByLabelText(/password/i);
    userEvent.type(passwordInput, "123456789");
    userEvent.clear(passwordInput);
    await waitFor(() => {
      const errMsg = screen.getByText("This field is required");
      expect(errMsg).toBeInTheDocument();
    });
  });

  // TESTING SUBMIT BTN
  it("should have a login btn", () => {
    render(<Login />, { wrapper });
    const loginBtn = screen.getByRole("button");
    expect(loginBtn).toBeInTheDocument();
  });

  it("login btn should be of type submit", () => {
    render(<Login />, { wrapper });
    const loginBtnType = screen.getByRole("button").type;
    expect(loginBtnType).toBe("submit");
  });

  it("login btn should be disabled at start", () => {
    render(<Login />, { wrapper });
    const loginBtn = screen.getByRole("button");
    expect(loginBtn).toBeDisabled();
  });

  it("login btn should be disabled when form is invalid", async () => {
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const loginBtn = screen.getByRole("button");
    userEvent.type(emailInput, "samah.mohamed");
    userEvent.type(passwordInput, "");
    await waitFor(() => {
      expect(loginBtn).toBeDisabled();
    });
  });

  it("login btn should be enabled when inputs filled correctly", async () => {
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const loginBtn = screen.getByRole("button");
    userEvent.type(emailInput, "samah.mohamed@ibtikar.net.sa");
    userEvent.type(passwordInput, "123456789");
    await waitFor(() => {
      expect(loginBtn).not.toBeDisabled();
    });
  });

  it("should call handle submit when click login btn", async () => {
    actions.loginRequest = jest.fn();
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const loginBtn = screen.getByRole("button");
    userEvent.type(emailInput, "samah.mohamed@ibtikar.net.sa");
    userEvent.type(passwordInput, "123456789");
    await waitFor(() => {
      userEvent.click(loginBtn);
      expect(actions.loginRequest).toHaveBeenCalledTimes(1);
    });
  });

  it("should call handle submit with email and password", async () => {
    actions.loginRequest = jest.fn();
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const loginBtn = screen.getByRole("button");
    userEvent.type(emailInput, "samah.mohamed@ibtikar.net.sa");
    userEvent.type(passwordInput, "123456789");
    await waitFor(() => {
      userEvent.click(loginBtn);
      expect(actions.loginRequest).toHaveBeenCalledWith({
        values: {
          email: "samah.mohamed@ibtikar.net.sa",
          password: "123456789",
        },
        router: null
      });
    });
  });
});
