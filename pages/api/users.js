import axios from "axios";

export const requestUsersList = async () =>
  await axios.get("https://jsonplaceholder.typicode.com/users");
export const requestSingleUser = async (id) =>
  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
