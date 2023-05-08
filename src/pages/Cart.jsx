import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { userRequest } from "../axiosRequest";

function Cart() {
  const [user, setUser] = useState(null);

  const cartItem = useSelector((state) => state.cart.products);
  const sessionUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const fetchUser = async () => {
      const getUser = await userRequest.get(`users/find/${sessionUser._id}`);
      const userDetails = await getUser.data;
      console.log(userDetails);
      setUser(Array(userDetails));
    };
    console.log(user);
    fetchUser();
  }, [sessionUser, user]);

  const deleteCartItem = (id) => {};
  return (
    <>
      <Nav />
      <div className="food_menu">
        {cartItem?.map((cartsProducts) => (
          <div className="foods" key={cartsProducts[0]._id}>
            <div className="food">
              <div className="food_img">
                <img src={cartsProducts[0].img} alt="foods" />
              </div>

              <div className="food_description">
                <h4>{cartsProducts[0].title}</h4>
                <p> {cartsProducts[0].desc} </p>
                <div className="cart">
                  <h3>
                    <i className="fa-solid fa-naira-sign"></i>
                    <span> {cartsProducts[0].price} </span>
                  </h3>
                  <div className="add_to_cart">
                    <FaTimes
                      className="icon hover text-white"
                      onClick={() => {
                        deleteCartItem(cartsProducts[0]._id);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link className="get_started" to="/dashboard">
        AdminPage
      </Link>
      <Footer />
    </>
  );
}

export default Cart;
