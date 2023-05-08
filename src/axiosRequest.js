import Axios from "axios";
const GetToken = () => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.user
  ).currentUser.accessToken;
  if (token === undefined) {
    console.log(token);
    return "";
  }
  return token;
};
const BASE_URL = "http://localhost:4000/api";
const token = GetToken();

export const userRequest = Axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});

export const publicRequest = Axios.create({
  baseURL: BASE_URL,
});
