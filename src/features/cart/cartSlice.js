import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cart: localStorage.getItem("cartProduct")
    ? JSON.parse(localStorage.getItem("cartProduct"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action)
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload.products._id && product.userEmail === action.payload.email
      );
      if (!selectedProduct) {
        const product = { ...action.payload.products, quantity: 1, userEmail: action.payload.email, uniqueId: action.payload.uniqueId };
        state.cart.push(product);
        toast.success("Product Added To Cart");
      } else {
        selectedProduct.quantity += 1;
        state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
        toast.success("Product Quantity Increased");
      }
      localStorage.setItem("cartProduct", JSON.stringify(state.cart));
    },
    removeToCart: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id && product.userEmail === action.payload.userEmail
      );
      console.log(selectedProduct)
      if (selectedProduct && action.payload.quantity > 1) {
        const product = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
          userEmail: action.payload.userEmail,
          uniqueId: action.payload.uniqueId
        };
        state.cart = state.cart.filter(
          (product) => product.uniqueId !== action.payload.uniqueId
        );
        state.cart.push(product);
      }
      else {
        state.cart = state.cart.filter(
          (product) => product.uniqueId !== action.payload.uniqueId
        );
      }
      localStorage.setItem("cartProduct", JSON.stringify(state.cart));
    },
    increaseQuantity: (state, action) => {
      // console.log(action.payload)
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id && product.userEmail === action.payload.userEmail
      );
      if (!selectedProduct) {
        const product = { ...action.payload, quantity: 1, userEmail: action.payload.userEmail, uniqueId: action.payload.uniqueId };
        state.cart.push(product);
      } else {
        selectedProduct.quantity += 1;
        state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
      }
      localStorage.setItem("cartProduct", JSON.stringify(state.cart));
    },
    decreaseQuantity: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id && product.userEmail === action.payload.userEmail
      );
      console.log(selectedProduct)
      if (selectedProduct && action.payload.quantity > 1) {
        const product = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
          userEmail: action.payload.userEmail,
          uniqueId: action.payload.uniqueId
        };
        state.cart = state.cart.filter(
          (product) => product.uniqueId !== action.payload.uniqueId
        );
        state.cart.push(product);
      }
      else {
        state.cart = state.cart.filter(
          (product) => product.uniqueId !== action.payload.uniqueId
        );
      }
      localStorage.setItem("cartProduct", JSON.stringify(state.cart));
    },
    clearCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.userEmail !== action.payload
      );
      console.log(action.payload)
      // state.cart = [];
      toast.error("Clear All Product");
      localStorage.setItem("cartProduct", JSON.stringify(state.cart));
    },
    getTotals: (state, action) => {
      const findProductByEmail = state.cart.filter(product => product.userEmail === action.payload)
      let { total, totalQuantity } = findProductByEmail.reduce(
        (cartTotal, cartItem) => {
          const { newPrice, quantity } = cartItem;
          const itemTotal = newPrice * quantity;

          cartTotal.total += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          totalQuantity: 0,
        }
      );
      state.cartTotalQuantity = totalQuantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart,
  removeToCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
