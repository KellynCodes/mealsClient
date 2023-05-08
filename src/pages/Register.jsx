import { React, useState } from "react";
import Axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import Footer from "./Footer";
import { publicRequest } from "../axiosRequest";

function Register() {
  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RegUser = () => {
    Axios.post(publicRequest.get("/api/auth/register"), {
      username: userName,
      country: country,
      phone: phone,
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5 card p-5 offset-3 mb-5">
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <input
                type="name"
                className="form-control mb-3"
                placeholder="Username"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="password_container">
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <i className="bi bi-password"></i>
              </div>

              <div className="remember_me">
                <input type="checkbox" className="form-check" />
                <label for="checkbox">Remember Me</label>
              </div>

              <div className="button_container">
                <button onClick={RegUser} className="btn">
                  Register
                </button>
              </div>
              <div className="reg">
                <p>Already Have An Account</p>
                <Link className="reg_btn" to="/Login">
                  Login
                </Link>
                <Routes>
                  <Route
                    className="reg_btn"
                    path="/login"
                    element={<Login />}
                  />
                </Routes>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
