import React, { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";
import OfferFlashCard from "./flashCard/OfferFlashCard";
import HomeCategoryByProduct from "./HomeCategoryByProduct/HomeCategoryByProduct";
import HomeProducts from "./HomeProducts/HomeProducts";

const Home = () => {
  const { test } = useContext(myContext);
  return (
    <div>
      <h1>Hero section</h1>
      <HomeProducts />
      <HomeCategoryByProduct />
      <OfferFlashCard />
      {/* <h2>Home Page {test} </h2> */}
    </div>
  );
};

export default Home;
