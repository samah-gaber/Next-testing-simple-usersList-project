import { LOGIN_RECEIVE } from "../types/auth";

export const loginReceive = (payload) => ({
  type: LOGIN_RECEIVE,
  payload,
});
