import React from "react";
<<<<<<< HEAD

import FAQ from "./FAQ/FAQ";
import OfferFlashCard from "./flashCard/OfferFlashCard";
import HomeCategoryByProduct from "./HomeCategoryByProduct/HomeCategoryByProduct";
import HomeProducts from "./HomeProducts/HomeProducts";
import OurTeam from "./OurTeam/OurTeam";
import Statistics from "./Statistics/Statistics";
import TeamTrustUs from "./truestedTeam/TeamTrustsUs";

const Home = () => {
  // const { test } = useContext(myContext);
  return (
    <div>
      <h1>Hero section</h1>
      <HomeProducts />
      <HomeCategoryByProduct />
      <OfferFlashCard />
      <Statistics />
      <OurTeam />
      <FAQ />
      <TeamTrustUs />
      {/* <h2>Home Page {test} </h2> */}
=======
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
>>>>>>> origin/master
    </div>
  );
};

export default Home;
