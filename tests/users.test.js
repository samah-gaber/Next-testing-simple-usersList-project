import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import Home from "@pages/index";
import UserCard from "@components/userCard";
import * as thunkActions from "../redux/thunk/users";
import axios from "axios";

const initialState = {
  usersList: [],
  singleUser: {},
};
const thunkMiddleWare = [thunk];
const mockStore = configureMockStore(thunkMiddleWare);
const store = mockStore(initialState);
const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

jest.mock("axios");

axios.get.mockImplementation(() => {
  return Promise.resolve({
    data: [
      {
        id: 1,
        name: "test 1",
      },
      {
        id: 2,
        name: "test2",
      },
    ],
  });
});

describe("Home page", () => {
  it("has a Users header", () => {
    render(<Home />, { wrapper });
    const usersHeader = screen.getByRole("heading", { level: 1 });
    expect(usersHeader).toBeInTheDocument();
  });
  it("user card renders name label", () => {
    render(<UserCard id="1" name="jhon doe" phone="015454872" />, { wrapper });
    const nameLabel = screen.getByTestId("name_label");
    expect(nameLabel).toBeInTheDocument();
  });
  it("user card name label is Name:", () => {
    render(<UserCard id="1" name="jhon doe" phone="015454872" />, { wrapper });
    const nameLabel = screen.getByTestId("name_label").innerHTML;
    expect(nameLabel).toBe("Name: ");
  });
  it("user card renders name value correctly", () => {
    render(<UserCard id="1" name="jhon doe" phone="015454872" />, { wrapper });
    const nameLabel = screen.getByTestId("name_value").innerHTML;
    expect(nameLabel).toBe("jhon doe");
  });
  it("user card renders phone label", () => {
    render(<UserCard id="1" name="jhon doe" phone="015454872" />, { wrapper });
    const phoneLabel = screen.getByTestId("phone_label");
    expect(phoneLabel).toBeInTheDocument();
  });
  it("user card phone label is Phone:", () => {
    render(<UserCard id="1" name="jhon doe" phone="015454872" />, { wrapper });
    const phoneLabel = screen.getByTestId("phone_label").innerHTML;
    expect(phoneLabel).toBe("Phone: ");
  });
  it("user card renders phone value correctly", () => {
    render(<UserCard id="1" name="jhon doe" phone="015454872" />, { wrapper });
    const phoneLabel = screen.getByTestId("phone_value").innerHTML;
    expect(phoneLabel).toBe("015454872");
  });
  it("request users list api dispatched receive users list action", () => {
    store.dispatch(thunkActions.requestUsersListAction()).then(() => {
      expect(store.getActions()).toContainEqual({
        type: "RECEIVE_USERS_LIST",
        payload: [
          {
            id: 1,
            name: "test 1",
          },
          {
            id: 2,
            name: "test2",
          },
        ],
      });
    });
  });
});
