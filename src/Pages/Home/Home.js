import React from "react";
import Carousel from "../Carousel/Carousel";
import ContactForm from "./ContactForm/ContactForm";
import FAQ from "./FAQ/FAQ";
import OfferFlashCard from "./flashCard/OfferFlashCard";
import GamingProduct from "./GamingProduct/GamingProduct";
import HireUsToPromot from "./HireUsToPromot/HireUsToPromot";
import HomeCategoryByProduct from "./HomeCategoryByProduct/HomeCategoryByProduct";
import Newsletter from "./Newsletter/Newsletter";
import OurTeam from "./OurTeam/OurTeam";
import Statistics from "./Statistics/Statistics";
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct";
import TeamTrustUs from "./truestedTeam/TeamTrustsUs";
import useTitle from "../../hooks/useTitle";
import ContactUs from "../contactUs/ContactUs";
import PopularBlogs from "./PopularBlogs/PopularBlogs";
const Home = () => {
  useTitle("");
  return (
    <div className="">
      {/* Istiak Ahmed */}
      <Carousel />
      {/* Istiak Ahmed */}

      {/* Alamin */}
      {/* <HomeProducts /> */}
      <HomeCategoryByProduct />
      {/* Alamin */}

      {/* Rakibul */}
      <TopSellingProduct></TopSellingProduct>
      <GamingProduct></GamingProduct>
      {/* Rakibul */}

      {/* Tuhin */}
      <br /><br />
      <PopularBlogs/>
      <OfferFlashCard />
      <Statistics />
      {/* <TeamTrustUs /> */}
      {/* <HireUsToPromot /> */}
      <OurTeam />
      <FAQ />
      {/* <ContactForm /> */}
      <ContactUs/>
      {/* <Newsletter /> */}
      
      {/* Tuhin */}
    </div>
  );
};

export default Home;
