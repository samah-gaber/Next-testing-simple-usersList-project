import { RECEIVE_USERS_LIST, RECEIVE_SINGLE_USER } from "../types/users";

export const receiveUsersList = (payload) => ({
  type: RECEIVE_USERS_LIST,
  payload,
});
export const receiveSingleUser = (payload) => ({
  type: RECEIVE_SINGLE_USER,
  payload,
});
