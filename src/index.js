import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Authcontext from "./contextApi/Authcontext";
import "remixicon/fonts/remixicon.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Toaster } from "react-hot-toast";
import { getTotals } from "./features/cart/cartSlice";

store.dispatch(getTotals());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Authcontext>
    {/* this provider is used for redux store */}
    <Provider store={store}>
      <App />
      <Toaster></Toaster>
    </Provider>
  </Authcontext>
);

reportWebVitals();
