import { requestUsersList, requestSingleUser } from "../../pages/api/users";
import { receiveUsersList, receiveSingleUser } from "../actions/users";

export const requestUsersListAction = () => {
  return (dispatch) => {
    return requestUsersList().then(
      async (res) => {
        dispatch(receiveUsersList(res.data));
      },
      (err) => {
        console.log("err", err);
      }
    );
  };
};
export const requestSingleUserAction = (id) => {
  return (dispatch) => {
    return requestSingleUser(id).then(
      async (res) => {
        dispatch(receiveSingleUser(res.data));
      },
      (err) => {
        console.log("err", err);
      }
    );
  };
};
