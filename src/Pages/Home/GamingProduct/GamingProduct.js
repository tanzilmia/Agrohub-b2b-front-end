import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { TbCategory2 } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import "swiper/swiper-bundle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoadOneDataByCategories } from "../../../features/products/productCategoriesLoadOneDataSlice";

SwiperCore.use([Navigation, Autoplay]);

const GamingProduct = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const dispatch = useDispatch();

  const { loadOneProduct, isLoading, error } = useSelector(
    (state) => state.loadOneDataByCategories
  );

  useEffect(() => {
    dispatch(fetchLoadOneDataByCategories());
  }, [dispatch]);

  useEffect(() => {
    const updateCarousel = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSlidesToShow(2);
      } else if (screenWidth <= 1024) {
        setSlidesToShow(2);
      } else if (screenWidth <= 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateCarousel();

    window.addEventListener("resize", updateCarousel);
    return () => {
      window.removeEventListener("resize", updateCarousel);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          className="animate-spin -ml-1 mr-3 h-10 w-10 text-[#29BA2F]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20.732V24c4.418 0 8-3.582 8-8h-4a4.01 4.01 0 01-4 4.732z"
          ></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="mt-28">
      <div className="mx-10">
        <div className="flex justify-between py-6">
          <h3 className="text-xl flex items-center md:text-2xl font-semibold">
            <TbCategory2 className="mr-3 text-[#FF5721] text-3xl"></TbCategory2>{" "}
            Shop By Categories
          </h3>
          <span className="font-semibold md:text-sm flex items-center text-[#FF5721] hover:text-orange-400">
            <button className="">View More</button>
            <i className="ri-arrow-right-line ml-1"></i>
          </span>
        </div>
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={slidesToShow}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 2500 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-8">
            {loadOneProduct.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCard product={product}></ProductCard>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next "></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default GamingProduct;
