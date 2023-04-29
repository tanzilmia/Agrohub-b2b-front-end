import axios from "axios";
import React from "react";

const CartProduct = () => {
  axios.get("http://localhost:5000/CartProduct/getcartproduct").then((data) => {
    console.log(data.data);
  });

  return <div>CartProduct</div>;
};

export default CartProduct;
