import React, { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";
import FAQ from "./FAQ/FAQ";
import OfferFlashCard from "./flashCard/OfferFlashCard";
import HomeCategoryByProduct from "./HomeCategoryByProduct/HomeCategoryByProduct";
import HomeProducts from "./HomeProducts/HomeProducts";
import OurTeam from "./OurTeam/OurTeam";
import Statistics from "./Statistics/Statistics";
import TeamTrustUs from "./truestedTeam/TeamTrustsUs";

const Home = () => {
  const { test } = useContext(myContext);
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
    </div>
  );
};

export default Home;
