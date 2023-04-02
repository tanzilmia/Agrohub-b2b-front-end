import React from "react";
import Carousel from "../Carousel/Carousel";
import ContactForm from "./ContactForm/ContactForm";
import FAQ from "./FAQ/FAQ";
import OfferFlashCard from "./flashCard/OfferFlashCard";
import GamingProduct from "./GamingProduct/GamingProduct";
import HireUsToPromot from "./HireUsToPromot/HireUsToPromot";
import HomeCategoryByProduct from "./HomeCategoryByProduct/HomeCategoryByProduct";
import HomeProducts from "./HomeProducts/HomeProducts";
import Newsletter from "./Newsletter/Newsletter";
import OurTeam from "./OurTeam/OurTeam";
import Statistics from "./Statistics/Statistics";
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct";
import TeamTrustUs from "./truestedTeam/TeamTrustsUs";

const Home = () => {
  return (
    <div className="bg-gray-100">
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
      <Statistics />
      <TeamTrustUs />
      <HireUsToPromot />
      <OurTeam />
      <FAQ />
      <ContactForm />
      <Newsletter />
      {/* Tuhin */}
    </div>
  );
};

export default Home;
