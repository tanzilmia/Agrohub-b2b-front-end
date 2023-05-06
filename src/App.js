import { RouterProvider } from "react-router-dom";
import router from "./routing/router";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotals } from "./features/cart/cartSlice";
import { useContext } from "react";
import { myContext } from "./contextApi/Authcontext";

function App() {
  const {user} = useContext(myContext)
  const email = user?.email;
  const products = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals(email));
  }, [products, dispatch, email]);

  return (
    <div className="bg-gray-100 dark:bg-[#1B1B1D]">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
