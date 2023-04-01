import React from "react";
import Carousel from "../Carousel/Carousel";
import OfferFlashCard from "./flashCard/OfferFlashCard";
import GamingProduct from "./GamingProduct/GamingProduct";
import HomeCategoryByProduct from "./HomeCategoryByProduct/HomeCategoryByProduct";
import HomeProducts from "./HomeProducts/HomeProducts";
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct";

const Home = () => {
  return (
    <div>
      {/* Istiak Ahmed */}
      <Carousel></Carousel>
      {/* Istiak Ahmed */}

      {/* Alamin */}
      <HomeProducts />
      <HomeCategoryByProduct />
      {/* Alamin */}

      {/* Rakibul */}
      <TopSellingProduct></TopSellingProduct>
      <GamingProduct></GamingProduct>
      {/* Rakibul */}

      {/* Tuhin */}
      <OfferFlashCard />
      {/* Tuhin */}
    </div>
  );
};

export default Home;
