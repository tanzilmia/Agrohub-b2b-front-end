import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchAllCategory } from "../features/categories/categorySlice";
import Footer from "../sheardComponent/Footer";
import Navbar from "../sheardComponent/Navbar";

const MainLayout = () => {
  const dispatch = useDispatch();
  // get all category from redux store
  const { isLoading, isError, error, categories } = useSelector(
    (state) => state.allCategories
  );

  useEffect(() => {
    // dispatch to fetch category from server to store
    dispatch(fetchAllCategory());
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
