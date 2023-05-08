import { React, useState, useEffect } from "react";
import { FaCartArrowDown, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { publicRequest, userRequest } from "../axiosRequest";
import "../css/productDetails.css";
import { addProduct } from "../Redux/CartRedux";
import Nav from "./Nav";
import Footer from "./Footer";

const ProductDetails = () => {
  const [ducts, setDucts] = useState(null);
  const [quantity, setQuantity] = useState(1);

  //getting product and adding to cart with useState
  const [productId, setProductID] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productImg, setProductImg] = useState("");

  const dispatch = useDispatch();

  const handleQuantityIncreaseORDecrease = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement") {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    //add to cart
    dispatch(addProduct(ducts, quantity));
    publicRequest.post("/carts/", {
      userId: ducts._id,
    });
    console.log(ducts);
  };

  const addItemTocart = (e) => {
    e.preventDefault();
    userRequest
      .post("http://localhost:4000/api/carts", {
        productId,
        productTitle,
        productDesc,
        productPrice,
        productImg,
        quantity,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const windowURl = window.location.pathname;
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchProduct = await publicRequest.get(`${windowURl}`);
      const product = await fetchProduct.data;
      console.log(product);
      setDucts(Array(product));
    };
    fetchProducts();
  }, []);
  console.log(ducts);

  return (
    <>
      <Nav />
      {ducts?.map((product) => (
        <div className="productDetailsContainer" key={product._id}>
          <div className="productLeft">
            <div className="productContainer card p-3">
              <div className="productImg">
                <img src={product.img} alt="product" />
                <h5>{product.title}</h5>
                <p>{product.desc}</p>
              </div>
              <div className="details">
                <div className="cartQuantity">
                  <div className="button">
                    <FaMinus
                      className="icon"
                      onClick={() =>
                        handleQuantityIncreaseORDecrease("decrement")
                      }
                    />
                  </div>
                  <h4 className="card quantityPadding"> {quantity} </h4>
                  <div className="button">
                    <FaPlus
                      className="icon"
                      onClick={() =>
                        handleQuantityIncreaseORDecrease("increment")
                      }
                    />
                  </div>
                </div>
                <form action="" className="button" onSubmit={addItemTocart}>
                  <input
                    type="hidden"
                    name=""
                    value={() => {
                      setProductID(product._id);
                    }}
                  />
                  <input
                    type="hidden"
                    name=""
                    value={() => {
                      setProductImg(product.img);
                    }}
                  />
                  <input
                    type="hidden"
                    name=""
                    value={() => {
                      setProductPrice(product.price);
                    }}
                  />
                  <input
                    type="hidden"
                    name=""
                    value={() => {
                      setProductTitle(product.title);
                    }}
                  />
                  <input
                    type="hidden"
                    name=""
                    value={() => {
                      setProductDesc(product.desc);
                    }}
                  />
                  <button type="submit">
                    <FaCartArrowDown className="icon" onClick={addToCart} />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="productRight">
            <div className="col-md-5">
              <div className="card p-3 justify-content-center text-secondary">
                <h5>
                  <b>Name:</b> {product.name}
                </h5>
                <h5>
                  <b>Price:</b> {product.price}
                </h5>
                <h5>
                  <b>Quantity:</b> {quantity}
                </h5>
                <h5>
                  <b>Total Amount:</b> {(product.price *= quantity)}
                </h5>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default ProductDetails;
