import { loginReceive } from "../actions/auth";

export const loginRequest = ({ values, router }) => {
  return (dispatch) => {
    const user_name = "Samah Gaber";
    const token = "dfksdjnffshi478woibfwyfgw487gh4owibow34itb";
    dispatch(
      loginReceive({
        user_name,
        token,
      })
    );
    localStorage.setItem("token", token);
    localStorage.setItem("user_name", user_name);
    router.push("/");
  };
};
