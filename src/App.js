import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { fetchAllProducts } from "./features/products/productsSlice";

import router from "./routing/router";

function App() {
  const dispatch = useDispatch();
  // fetching data from redux store
  const { products, isLoading, isError, error } = useSelector((state) => state);
  useEffect(() => {
    // dispatch for get all products
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
