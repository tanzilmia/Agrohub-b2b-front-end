import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Authcontext from "./contextApi/Authcontext";
import "remixicon/fonts/remixicon.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Authcontext>
    {/* this provider is used for redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </Authcontext>
);

reportWebVitals();
