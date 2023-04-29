import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cart: localStorage.getItem("cartProduct")
    ? JSON.parse(localStorage.getItem("cartProduct"))
    : [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (!selectedProduct) {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
        toast.success("Product Added To Cart")
      } else {
        selectedProduct.quantity += 1;
        state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
          toast.success("Product Quantity Increased")
      }
      localStorage.setItem("cartProduct", JSON.stringify(state.cart));
    },
    removeToCart: (state, action) => {
      if (action.payload.quantity > 1) {
        const product = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        };
        state.cart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        state.cart.push(product);
        toast.error("Product Quantity Decreased")
      } else {
        state.cart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        toast.error("Product Remove From Cart")
      }
      localStorage.setItem("cartProduct", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
