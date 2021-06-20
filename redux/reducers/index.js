import { combineReducers } from "redux";
import hydrate from "./hydrate";
import auth from "./auth";
import users from "./users";

export default combineReducers({
  hydrate,
  auth,
  users,
});
