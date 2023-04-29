import axios from "axios";
import React from "react";
import useTitle from "../../hooks/useTitle";

const CartProduct = () => {
  axios.get("http://localhost:5000/CartProduct/getcartproduct").then((data) => {
  });
  useTitle("cart product");

  return <div>CartProduct</div>;
};

export default CartProduct;
