import { RECEIVE_USERS_LIST, RECEIVE_SINGLE_USER } from "../types/users";

const INITIAL_STATE = {
  usersList: [],
  singleUser: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_USERS_LIST:
      return { ...state, usersList: [...action.payload] };
    case RECEIVE_SINGLE_USER:
      return { ...state, singleUser: { ...action.payload } };
    default:
      return state;
  }
};
