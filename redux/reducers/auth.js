import { LOGIN_RECEIVE } from "../types/auth";

const INITIAL_STATE = {
  user_name:
    typeof window !== "undefined" ? localStorage.getItem("user_name") : "",
  token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_RECEIVE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
