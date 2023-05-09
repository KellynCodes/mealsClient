import Axios from "axios";

let token;
function GetToken() {
  let localStorageToken = localStorage.getItem("persist:root");
  console.log(localStorageToken);
  if (token == null) {
    console.log(localStorageToken);
    return "";
  }
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
const BASE_URL = "https://meals-d5z2.onrender.com/api";
const UserToken = GetToken();

export const userRequest = Axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${UserToken}` },
});

export const publicRequest = Axios.create({
  baseURL: BASE_URL,
});
