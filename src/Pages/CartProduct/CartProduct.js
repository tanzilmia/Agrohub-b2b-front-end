import axios from "axios";
import React from "react";
import useTitle from "../../hooks/useTitle";

const CartProduct = () => {
  axios.get("https://agrohub.vercel.app/CartProduct/getcartproduct").then((data) => {
  });
  useTitle("cart product");

  return <div>CartProduct</div>;
};

export default CartProduct;
