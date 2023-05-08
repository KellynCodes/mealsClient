import Axios from "axios";

let token;
function GetToken() {
  let localStorageToken = localStorage.getItem("persist:root");
  token = JSON.parse(JSON.parse(localStorageToken)?.user);
  console.log(token);
  if (token.currentUser === null) {
    console.log(localStorageToken);
    return "";
  }
  token = JSON.parse(JSON.parse(localStorageToken)?.user).currentUser
    .accessToken;

  return token;
}
const BASE_URL = "http://localhost:4000/api";
const UserToken = GetToken();

export const userRequest = Axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${UserToken}` },
});

export const publicRequest = Axios.create({
  baseURL: BASE_URL,
});
