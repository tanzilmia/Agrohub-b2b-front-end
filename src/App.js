import { RouterProvider } from "react-router-dom";
import router from "./routing/router";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotals } from "./features/cart/cartSlice";

function App() {
  const products = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [products, dispatch]);

  return (
    <div className="bg-gray-100">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
