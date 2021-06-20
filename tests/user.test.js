import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createStore } from "redux";
import UserDetails from "@components/UserDetails";
import users from "../redux/reducers/users";
import * as actions from "../redux/actions/users";

const initialState = {
  usersList: [],
  singleUser: {},
};

const mockStore = createStore(users, initialState);

const wrapper = ({ children }) => (
  <Provider store={mockStore}>{children}</Provider>
);
const singleUserData = {
  id: 1,
  email: "Sincere@april.biz",
  name: "Leanne Graham",
  phone: "1-770-736-8031 x56442",
  company: { name: "Romaguera-Crona" },
};
describe("User details page", () => {
  it("has a user details header", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const UserDetailsHeader = screen.getByRole("heading", { level: 3 });
    expect(UserDetailsHeader).toBeInTheDocument();
  });
  it("has a user details title", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const userDetailsTitle = screen.getByTestId("user-details-header")
      .innerHTML;
    expect(userDetailsTitle).toMatch(/Users details/i);
  });
  it("renders id label", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const idLabel = screen.getByTestId("id-label");
    expect(idLabel).toBeInTheDocument();
  });
  it("id label is Id", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const idLabel = screen.getByTestId("id-label").innerHTML;
    expect(idLabel).toMatch("Id");
  });
  it("renders id value correctly", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const idValue = screen.getByTestId("id-value").innerHTML;
    expect(idValue).toMatch("1");
  });
  it("renders email label", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const emailLabel = screen.getByTestId("email-label");
    expect(emailLabel).toBeInTheDocument();
  });
  it("email label is Email", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const emailLabel = screen.getByTestId("email-label").innerHTML;
    expect(emailLabel).toMatch("Email");
  });
  it("renders email value correctly", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const emailValue = screen.getByTestId("email-value").innerHTML;
    expect(emailValue).toMatch("Sincere@april.biz");
  });
  it("renders name label", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const nameLabel = screen.getByTestId("name-label");
    expect(nameLabel).toBeInTheDocument();
  });
  it("name label is Name", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const nameLabel = screen.getByTestId("name-label").innerHTML;
    expect(nameLabel).toMatch("Name");
  });
  it("renders name value correctly", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const nameValue = screen.getByTestId("name-value").innerHTML;
    expect(nameValue).toMatch("Leanne Graham");
  });
  it("renders phone label", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const phoneLabel = screen.getByTestId("phone-label");
    expect(phoneLabel).toBeInTheDocument();
  });
  it("phone label is Phone", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const phoneLabel = screen.getByTestId("phone-label").innerHTML;
    expect(phoneLabel).toMatch("Phone");
  });
  it("renders phone value correctly", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const phoneValue = screen.getByTestId("phone-value").innerHTML;
    expect(phoneValue).toMatch("1-770-736-8031 x56442");
  });
  it("renders company label", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const companyLabel = screen.getByTestId("company-label");
    expect(companyLabel).toBeInTheDocument();
  });
  it("company label is Company", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const companyLabel = screen.getByTestId("company-label").innerHTML;
    expect(companyLabel).toMatch("Company");
  });
  it("renders company value correctly", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const companyValue = screen.getByTestId("company-value").innerHTML;
    expect(companyValue).toMatch("Romaguera-Crona");
  });
  it("renders status switch", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const companyLabel = screen.getByTestId("status-switch");
    expect(companyLabel).toBeInTheDocument();
  });
  it("renders status label", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const statusLabel = screen.getByTestId("status-label");
    expect(statusLabel).toBeInTheDocument();
  });
  it("status label is Status", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const statusLabel = screen.getByTestId("status-label").innerHTML;
    expect(statusLabel).toMatch("Status");
  });
  it("renders status correctly at first render", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const statusValue = screen.getByTestId("status-value").innerHTML;
    expect(statusValue).toMatch(/active/i);
  });
  it("renders status correctly with status switch change", () => {
    render(<UserDetails singleUser={singleUserData} />, { wrapper });
    const statusSwitch = screen.getByTestId("status-switch");
    userEvent.click(statusSwitch);
    const statusValue = screen.getByTestId("status-value").innerHTML;
    expect(statusValue).toMatch(/inactive/i);
  });
});
