import { React, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Register from "./Register";
import Nav from "./Nav";
import Footer from "./Footer";
import { login } from "../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const LoginUser = () => {
    login(dispatch, { email, password });
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5 mb-5 card p-5 offset-3">
            <h2 className="text-center mb-5">Meals Login Page</h2>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password_container">
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="password_container">
                {isFetching && <h5 className="errorOutput">Fetching User</h5>}
                {error && (
                  <h5 className="errorOutput">
                    Error Occurred Please Try again
                  </h5>
                )}
              </div>

              <div className="button_container">
                <button type="submit" className="btn" onClick={LoginUser}>
                  Login
                </button>
              </div>
              <div className="reg">
                <p>Already Have An Account</p>
                <Link className="reg_btn" to="/Register">
                  Register
                </Link>
                <Routes>
                  <Route
                    className="reg_btn"
                    path="/register"
                    element={<Register />}
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

export default Login;
