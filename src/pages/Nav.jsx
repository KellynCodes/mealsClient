import React from "react";
import Logo2 from "../images/logo2.jpg";
import Index from "./Index";
import {
  BsBasket2,
  BsCart3,
  BsFillHouseDoorFill,
  BsFillJournalBookmarkFill,
  BsSearch,
} from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const cartQauntity = useSelector((state) => state.cart.quantity);
  const sessionUser = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.user
  ).currentUser;
  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <Link to="/" className="logo_text logoLink">
            <div className="img">
              <img src={Logo2} alt="" />
            </div>
            <h1 className="logo_text">Meals</h1>
          </Link>
          <Routes>
            <Route path="/cart" element={<Index />} />
          </Routes>
        </div>

        <div className={`navlinks ${isMobile ? "navlinks" : "navlinkClose"} `}>
          <ul>
            <div className="first_registration">
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="create_account">
                Create Account
              </Link>
            </div>
            <li>
              <BsFillHouseDoorFill className="icon i" />
              <Link to="/" className="active">
                Home
              </Link>
              <Routes>
                <Route path="/cart" element={<Index />} />
              </Routes>
            </li>
            <li>
              <BsBasket2 className="icon i" />
              <a href="#menu">Menu</a>
            </li>
            <li>
              <BsCart3 className="icon i" />
              <a href="#mytray">My Tray</a>
            </li>
            <li>
              <BsFillJournalBookmarkFill className="icon i" />
              <a href="#mealplans">MealPlans</a>
            </li>
            <li>{} </li>
          </ul>
        </div>

        <div className="search_nav">
          <ul>
            <ul className="icons">
              <li>
                <i>
                  <BsSearch className="bi-search" />
                </i>
              </li>
              <li>
                <Link to="/cart">
                  <Badge badgeContent={cartQauntity} color="primary">
                    <ShoppingCartOutlined className="fa-cart" />
                  </Badge>
                </Link>
              </li>
            </ul>

            <div className="registration">
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="create_account">
                Create Account
              </Link>
            </div>
          </ul>
        </div>
        <div className="harmburgar_menu">
          <div className="cart">
            <Link to="/cart">
              <i>
                <Badge badgeContent={cartQauntity}>
                  <ShoppingCartOutlined className="fa-cart" />
                </Badge>
              </i>
            </Link>
          </div>
          <div
            className="navbar_toggle"
            onClick={() => {
              !isMobile ? setIsMobile(true) : setIsMobile(false);
            }}
          >
            {isMobile ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
