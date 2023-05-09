import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import "swiper/swiper-bundle.css";
import { useGetCategoriesQuery } from "../../../features/API/APISlice";

SwiperCore.use([Navigation, Autoplay]);

const HomeCategoryByProduct = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const { data, isLoading, isError, error } = useGetCategoriesQuery();

  useEffect(() => {
    const updateCarousel = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSlidesToShow(1);
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

  if (isError) {
    return <div>{error}</div>;
  }

  return (
    <main className="mx-10 mt-20 dark:text-[#FFFFFF]">
      <h2 className="lg:text-2xl text-2xl font-semibold text-center lg:m-24 mt-32 lg:mb-10 mb-16">
        Shop By Category
      </h2>
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
        <section className="grid place-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5 lg:gap-5 gap-y-5 px-5 ">
          {data?.map((categoryData, index) => (
            <SwiperSlide key={categoryData._id}>
              <div className="block rounded-lg w-full overflow-hidden shadow-2xl shadow-indigo-100 dark:shadow-black hover:shadow-2xl transition-all duration-300 hover:bg-indigo-100 dark:bg-[#4B5563] dark:hover:bg-indigo-800 transform hover:-translate-y-2 hover:scale-95">
                <img
                  src={categoryData.thumnail}
                  alt="Category"
                  className="h-44 w-full object-cover"
                />
                <div className="px-4 py-3">
                  <h3 className="text-base font-medium mb-1 text-center transition-all duration-300 hover:text-white">
                    {categoryData.category}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </section>
        <div className="swiper-button-next "></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </main>
  );
};

export default HomeCategoryByProduct;
