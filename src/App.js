import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";

import {
  BrowserRouter as ReactDom,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./css/boot.css";
import "./css/index.css";
import "./css/RegisterAndLogin.css";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <>
      <ReactDom>
        <Routes>
          <Route path="*" element={<Index />} />
          <Route
            path="/Login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/Register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/find/:id" element={<ProductDetails />} />
        </Routes>
      </ReactDom>
    </>
  );
}

export default App;
